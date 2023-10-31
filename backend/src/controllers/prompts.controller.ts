import { Request } from '../interfaces/routes.interfaces';
import { NextFunction, Response } from 'express';
import PromptService from '../services/prompts.service';
import { PromptInput } from '../models/prompt.model';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const prompts = await PromptService.findAll();
    return res.json(prompts);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request<PromptInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { prompt, type } = req.body;

    const createdPrompt = await PromptService.create({ prompt, type });
    return res.json(createdPrompt);
  } catch (error) {
    next(error);
  }
};
