import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const Model = sequelize.define(
  'model',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        fields: ['name', 'version'],
        unique: true,
      },
    ],
  },
);
