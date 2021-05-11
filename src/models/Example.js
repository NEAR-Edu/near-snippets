import { getCollection } from "./db";

export default class Example {
  static async find() {
    const collection = await getCollection("examples");
    return collection.find();
  }

  static async findByTopic(topic) {
    const collection = await getCollection("examples");
    return collection.find({ topic });
  }
}
