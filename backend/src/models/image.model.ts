import { DataTypes, Model as SeqModel, FindOptions, Optional } from 'sequelize';
import { sequelize } from '../db';

interface ImageAttributes {
  uuid: string;
  id: number;
  nsfw: boolean;
  url: string;
  model: string;
  positivePrompt: string;
  negativePrompt: string;
  width: number;
  height: number;
  steps: number;
  sampler: string;
  cfgScale: number;
  clipSkip: number;
}

export interface ImageInput extends Optional<ImageAttributes, 'uuid'> {}
export interface ImageOutput extends Required<ImageAttributes> {}
export interface ImageOptions extends FindOptions<ImageAttributes> {}

export class Image extends SeqModel<ImageAttributes, ImageInput> {
  declare uuid: string;
  declare id: number;
  declare nsfw: boolean;
  declare url: string;
  declare model: string;
  declare positivePrompt: string;
  declare negativePrompt: string;
  declare width: number;
  declare height: number;
  declare steps: number;
  declare sampler: string;
  declare cfgScale: number;
  declare clipSkip: number;
}

Image.init(
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    nsfw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    positivePrompt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    negativePrompt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sampler: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cfgScale: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clipSkip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, sequelize },
);
