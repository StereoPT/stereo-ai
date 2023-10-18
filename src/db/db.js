import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const defaultData = { keywords: [], models: [] };
const db = new Low(new JSONFile('db.json'), defaultData);

await db.read();
await db.write();

export default db;
export const keywords = db.data.keywords;
export const models = db.data.models;
