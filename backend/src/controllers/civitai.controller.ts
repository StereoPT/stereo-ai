import { NextFunction, Request, Response } from 'express';

import CivitaiService from '../services/civitai.service';
import { CivitaiInput } from '../interfaces/civitai.interfaces';

export const getImages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { modelId, limit, sort, period } = req.query as CivitaiInput;

    const images = await CivitaiService.getImages({
      modelId,
      limit,
      sort,
      period,
    });

    res.json(images);
  } catch (error) {
    next(error);
  }
};
