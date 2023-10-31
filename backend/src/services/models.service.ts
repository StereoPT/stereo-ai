import { Model, ModelInput, ModelOptions } from '../models/model.model';
import { Random } from 'random-js';

const findAll = async (options?: ModelOptions): Promise<Model[]> => {
  const models = await Model.findAll(options);
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async (options?: ModelOptions): Promise<Model> => {
  const models = await findAll(options);
  if (models.length <= 0) throw new Error('No Models Found!');

  const randomModel = new Random().pick(models);

  return randomModel;
};

const create = async (model: ModelInput): Promise<Model> => {
  const createdModel = await Model.create(model);
  if (!createdModel) throw new Error('Unable to Create Model!');

  return createdModel;
};

export default {
  findAll,
  findRandom,
  create,
};
