import * as Realm from "realm-web";

const app = new Realm.App({ id: "near-topics-rcavt" });
const credentials = Realm.Credentials.anonymous();
let db;

export const getDb = async () => {
  if (db) return db;

  const user = await app.logIn(credentials);
  db = user.mongoClient("mongodb-atlas").db("near");
  return db;
};

export const getCollection = async (collection) => {
  const db = await getDb();
  return db.collection(collection);
};
