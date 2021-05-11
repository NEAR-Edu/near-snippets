import { getCollection } from "./db";

export const find = async () => {
  const collection = await getCollection("examples");
  return collection.find();
};

export const findByTopic = async (topic) => {
  const collection = await getCollection("examples");
  return collection.find({ topics: topic });
};
