import { NextFunction, Request, Response } from 'express';
import KeywordService from '../services/keyword.service';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keywords = await KeywordService.findAll([]);
    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { keywords, type } = req.body;

    const createdKeywords = await KeywordService.bulkCreate({ keywords, type });
    return res.json(createdKeywords);
  } catch (error) {
    next(error);
  }
};
