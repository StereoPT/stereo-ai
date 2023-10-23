import { Model } from '../models/models.model.js';
import random from 'random';

export const findAll = async (req, res, next) => {
  try {
    const models = await Model.findAll();
    if (models.length <= 0) return res.json([]);

    return res.json(models);
  } catch (error) {
    next(error);
  }
};

export const findRandom = async (req, res, next) => {
  try {
    const models = await Model.findAll();
    if (models.length <= 0) return res.json('');
    const randomModel = random.choice(models);

    return res.json(randomModel);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { model, version } = req.body;

    if (!model) return res.json('');

    const createdModel = await Model.create({ name: model, version });

    return res.json(createdModel);
  } catch (error) {
    next(error);
  }
};
