import { DataTypes, Model as SeqModel, Optional } from 'sequelize';
import { sequelize } from '../db';

interface KeywordAttributes {
  id: number;
  keyword: string;
  type: 'positive' | 'negative';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeywordInput extends Optional<KeywordAttributes, 'id'> {}
export interface KeywordOutput extends Required<KeywordAttributes> {}

export class Keyword
  extends SeqModel<KeywordAttributes, KeywordInput>
  implements KeywordAttributes
{
  public id!: number;

  public keyword!: string;

  public type!: 'positive' | 'negative';

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
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
