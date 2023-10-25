import { DataTypes, Model as SeqModel, Optional } from 'sequelize';
import { sequelize } from '../db';

interface ModelAttributes {
  id: number;
  name: string;
  version: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ModelInput extends Optional<ModelAttributes, 'id'> {}
export interface ModelOutput extends Required<ModelAttributes> {}

export class Model
  extends SeqModel<ModelAttributes, ModelInput>
  implements ModelAttributes
{
  public id!: number;

  public name!: string;

  public version!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Model.init(
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
    timestamps: true,
    sequelize,
    indexes: [
      {
        fields: ['name', 'version'],
        unique: true,
      },
    ],
  },
);
