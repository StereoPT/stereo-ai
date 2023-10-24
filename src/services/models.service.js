import random from 'random';
import { Model } from '../models/models.model.js';

const findAll = async () => {
  const models = await Model.findAll();
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async () => {
  const models = await findAll();
  return random.choice(models);
};

const create = async ({ name, version }) => {
  if (!name || !version) return;

  const createdModel = await Model.create({ name, version });
  return createdModel;
};

export default {
  findAll,
  findRandom,
  create,
};
