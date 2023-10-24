import { Model } from '../models/models.model';
import { CreateModel } from '../interfaces/model.interface';
import random from 'random';

const findAll = async () => {
  const models = await Model.findAll();
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async () => {
  const models = await findAll();
  return random.choice(models);
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
