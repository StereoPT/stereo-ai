import { Request } from '../interfaces/routes.interfaces';
import { NextFunction, Response } from 'express';
import GenerationsService from '../services/generations.service';

export const generate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const output = await GenerationsService.generate();
    return res.json(output);
  } catch (error) {
    next(error);
  }
};
