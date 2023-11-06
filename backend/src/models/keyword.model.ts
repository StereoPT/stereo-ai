import { DataTypes, Model as SeqModel, FindOptions, Optional } from 'sequelize';
import { sequelize } from '../db';

export type KeywordType = 'positive' | 'negative';

interface KeywordAttributes {
  keyword: string;
  type: KeywordType;
  usages: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeywordInput extends Optional<KeywordAttributes, 'usages'> {}
export interface KeywordOutput extends Required<KeywordAttributes> {}
export interface KeywordOptions extends FindOptions<KeywordAttributes> {}

export class Keyword extends SeqModel<KeywordAttributes, KeywordInput> {
  declare keyword: string;
  declare type: KeywordType;
  declare usages: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

Keyword.init(
  {
    keyword: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('positive', 'negative'),
      primaryKey: true,
      allowNull: false,
    },
    usages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
  },
);
