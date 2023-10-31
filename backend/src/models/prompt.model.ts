import { DataTypes, Model as SeqModel, Optional } from 'sequelize';
import { sequelize } from '../db';

export type PromptType = 'positive' | 'negative';

interface PromptAttributes {
  id: number;
  prompt: string;
  type: PromptType;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PromptInput extends Optional<PromptAttributes, 'id'> {}
export interface PromptOutput extends Required<PromptAttributes> {}

export class Prompt extends SeqModel<PromptAttributes, PromptInput> {
  declare id: number;
  declare prompt: string;
  declare type: PromptType;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

Prompt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    prompt: {
      type: DataTypes.TEXT,
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
        unique: true,
        fields: ['prompt', 'type'],
      },
    ],
  },
);
