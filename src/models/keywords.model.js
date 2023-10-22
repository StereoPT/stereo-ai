import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

export const Keyword = sequelize.define('keyword', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  keyword: {
    type: DataTypes.STRING,
    unique: true,
  },
});
