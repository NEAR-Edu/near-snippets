const fs = require("fs");
const yaml = require("js-yaml");
const { MongoClient } = require("mongodb");

const SNIPPETS_DIRECTORY = `${__dirname}/snippets`;

const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const files = fs.readdirSync(SNIPPETS_DIRECTORY);

const docs = files.map((file) => {
  const [, rawFrontMatter, explainer] = fs
    .readFileSync(`${SNIPPETS_DIRECTORY}/${file}`, "utf-8")
    .split("---");

  const frontMatter = yaml.load(rawFrontMatter);
  return {
    ...frontMatter,
    explainer: explainer.trim(),
  };
});

client
  .connect()
  .then(() => client.db("near").collection("examples"))
  .then((collection) => {
    return Promise.all(
      docs.map((doc) => {
        return collection.findOneAndUpdate(
          { title: doc.title },
          { $set: doc },
          {
            upsert: true,
          }
        );
      })
    );
  })
  .finally(() => client.close());
