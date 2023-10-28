import { NextFunction, Request, Response } from 'express';

import CivitaiService from '../services/civitai.service';

export const getImages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const images = await CivitaiService.getImages();
    res.json(images);
  } catch (error) {
    next(error);
  }
};
