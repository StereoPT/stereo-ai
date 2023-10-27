import { DataTypes, Model as SeqModel } from 'sequelize';
import { sequelize } from '../db';

interface ModelAttributes {
  name: string;
  version: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ModelInput extends ModelAttributes {}
export interface ModelOutput extends Required<ModelAttributes> {}

export class Model extends SeqModel<ModelAttributes, ModelInput> {
  declare name: string;
  declare version: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

Model.init(
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
  },
);
