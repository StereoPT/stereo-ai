import ModelService from '../services/models.service.js';

export const findAll = async (req, res, next) => {
  try {
    const models = await ModelService.findAll();
    return res.json(models);
  } catch (error) {
    next(error);
  }
};

export const findRandom = async (req, res, next) => {
  try {
    const randomModel = await ModelService.findRandom();
    return res.json(randomModel);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { model, version } = req.body;

    const createdModel = await ModelService.create({ name: model, version });
    return res.json(createdModel);
  } catch (error) {
    next(error);
  }
};
