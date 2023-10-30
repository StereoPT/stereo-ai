import { DataTypes, Model as SeqModel, FindOptions } from 'sequelize';
import { sequelize } from '../db';

export type KeywordType = 'positive' | 'negative';

interface KeywordAttributes {
  keyword: string;
  type: KeywordType;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeywordInput extends KeywordAttributes {}
export interface KeywordOutput extends Required<KeywordAttributes> {}
export interface KeywordOptions extends FindOptions<KeywordAttributes> {}

export class Keyword extends SeqModel<KeywordAttributes, KeywordInput> {
  declare keyword: string;
  declare type: KeywordType;
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
  },
  {
    timestamps: true,
    sequelize,
  },
);
