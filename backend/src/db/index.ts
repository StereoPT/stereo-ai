import 'dotenv/config';
import { Dialect, Sequelize } from 'sequelize';

const DB_NAME = process.env.DATABASE_NAME || 'default';
const DB_USERNAME = process.env.DATABASE_USERNAME || 'username';
const DB_PASSWORD = process.env.DATABASE_PASSWORD || 'password';
const DB_HOST = process.env.DATABASE_HOST;
const DB_DIALECT = (process.env.DATABASE_DIALECT || 'postgres') as Dialect;

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
});
