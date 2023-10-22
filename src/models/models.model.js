import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

export const Model = sequelize.define('model', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
});
