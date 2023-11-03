import { Request } from '../interfaces/routes.interfaces';
import { NextFunction, Response } from 'express';
import ImageService from '../services/images.service';
import { ImageInput } from '../models/image.model';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const prompts = await ImageService.findAll();
    return res.json(prompts);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request<ImageInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      id,
      nsfw,
      url,
      model,
      positivePrompt,
      negativePrompt,
      width,
      height,
      steps,
      sampler,
      cfgScale,
      clipSkip,
    } = req.body;

    const createdPrompt = await ImageService.create({
      id,
      nsfw,
      url,
      model,
      positivePrompt,
      negativePrompt,
      width,
      height,
      steps,
      sampler,
      cfgScale,
      clipSkip,
    });
    return res.json(createdPrompt);
  } catch (error) {
    next(error);
  }
};
