import { Model } from '../models/models.model';
import { CreateModel } from '../interfaces/model.interface';
import { Random } from 'random-js';

const findAll = async () => {
  const models = await Model.findAll();
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async () => {
  const models = await findAll();
  const randomModel = new Random().pick(models);
  return randomModel;
};

const create = async ({ name, version }: CreateModel) => {
  if (!name || !version) return;

  const createdModel = await Model.create({ name, version });
  return createdModel;
};

export default {
  findAll,
  findRandom,
  create,
};
