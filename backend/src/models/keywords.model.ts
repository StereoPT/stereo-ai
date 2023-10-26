import { DataTypes, Model as SeqModel, Optional, FindOptions } from 'sequelize';
import { sequelize } from '../db';

export type KeywordType = 'positive' | 'negative';

interface KeywordAttributes {
  id: number;
  keyword: string;
  type: KeywordType;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeywordInput extends Optional<KeywordAttributes, 'id'> {}
export interface BulkKeywordInput {
  keywords: string;
  type: KeywordType;
}
export interface KeywordOutput extends Required<KeywordAttributes> {}
export interface KeywordOptions extends FindOptions<KeywordAttributes> {}

export class Keyword extends SeqModel<KeywordAttributes, KeywordInput> {
  declare id: number;
  declare keyword: string;
  declare type: KeywordType;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

Keyword.init(
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
    timestamps: true,
    sequelize,
    indexes: [
      {
        fields: ['keyword', 'type'],
        unique: true,
      },
    ],
  },
);
