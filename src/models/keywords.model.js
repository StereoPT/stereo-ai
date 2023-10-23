import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

export const Keyword = sequelize.define(
  'keyword',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('positive', 'negative'),
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        fields: ['keyword', 'type'],
        unique: true,
      },
    ],
  }
);
