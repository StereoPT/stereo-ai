import { Request } from '../interfaces/routes.interfaces';
import { NextFunction, Response } from 'express';

import ModelService from '../services/models.service';
import { ModelInput } from '../models/model.model';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const models = await ModelService.findAll();
    return res.json(models);
  } catch (error) {
    next(error);
  }
};

export const findRandom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const randomModel = await ModelService.findRandom();
    return res.json(randomModel);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request<ModelInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, version, modelId } = req.body;

    const createdModel = await ModelService.create({ name, version, modelId });
    return res.json(createdModel);
  } catch (error) {
    next(error);
  }
};
