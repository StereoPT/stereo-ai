import { Model, ModelInput, ModelOptions } from '../models/model.model';
import { Random } from 'random-js';

const findAll = async ({ attributes }: ModelOptions): Promise<Model[]> => {
  const models = await Model.findAll({ attributes });
  if (models.length <= 0) return [];

  return models;
};

const findRandom = async ({ attributes }: ModelOptions): Promise<Model> => {
  const models = await findAll({ attributes });
  if (models.length <= 0) throw new Error('No Models Found!');

  const randomModel = new Random().pick(models);

  return randomModel;
};

const create = async ({
  name,
  version,
  modelId,
}: ModelInput): Promise<Model> => {
  const createdModel = await Model.create({ name, version, modelId });

  return createdModel;
};

export default {
  findAll,
  findRandom,
  create,
};
