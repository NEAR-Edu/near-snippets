import { getCollection } from "./db";

export const findTopics = async () => {
  const collection = await getCollection("examples");
  return collection.aggregate([
    { $unwind: "$topics" },
    { $group: { _id: "$topics", exampleCount: { $sum: 1 } } },
    { $project: { name: "$_id", exampleCount: true } },
  ]);
};
