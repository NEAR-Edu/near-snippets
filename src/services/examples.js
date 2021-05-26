import { BSON } from "realm-web";
import { fetchExplainer } from "../utils/examples";
import { getCollection } from "./db";

export const findExamples = async (query) => {
  const collection = await getCollection("examples");
  return collection.find(query, {
    sort: { "difficulty.language": 1, "difficulty.near": 1 },
  });
};

export const findExampleById = async (_id) => {
  const collection = await getCollection("examples");
  const example = await collection.findOne({ _id: BSON.ObjectID(_id) });

  const explainer = await fetchExplainer(example);

  return {
    ...example,
    explainer,
  };
};
