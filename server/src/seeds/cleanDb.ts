import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const list = await models[modelName]?.db?.db?.listCollections({ name: collectionName })?.toArray();

    if (list?.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};