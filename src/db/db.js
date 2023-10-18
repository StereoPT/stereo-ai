import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const defaultData = { keywords: [] };
const db = new Low(new JSONFile('db.json'), defaultData);

await db.read();
await db.write();

export default db;
