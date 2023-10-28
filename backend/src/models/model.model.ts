import { DataTypes, FindOptions, Model as SeqModel } from 'sequelize';
import { sequelize } from '../db';

interface ModelAttributes {
  name: string;
  version: string;
  modelId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ModelInput extends ModelAttributes {}
export interface ModelOutput extends Required<ModelAttributes> {}
export interface ModelOptions extends FindOptions<ModelAttributes> {}

export class Model extends SeqModel<ModelAttributes, ModelInput> {
  declare name: string;
  declare version: string;
  declare modelId: number;
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
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
  },
);
