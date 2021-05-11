import { getCollection } from "./db";

export const findExamples = async (query) => {
  const collection = await getCollection("examples");
  return collection.find(query);
};
