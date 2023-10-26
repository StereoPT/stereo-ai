import { Model, ModelInput } from '../models/models.model';
import { Random } from 'random-js';

const findAll = async (): Promise<Model[]> => {
  const models = await Model.findAll();
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async (): Promise<Model> => {
  const models = await findAll();
  const randomModel = new Random().pick(models);

  return randomModel;
};

const create = async ({ name, version }: ModelInput): Promise<Model> => {
  const createdModel = await Model.create({ name, version });

  return createdModel;
};

export default {
  findAll,
  findRandom,
  create,
};
