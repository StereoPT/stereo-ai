import { NextFunction, Request, Response } from 'express';
import KeywordService from '../services/keywords.service';
import { KeywordInput } from '../models/keyword.model';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keywords = await KeywordService.findAll({});
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
    const { keyword, type } = req.body as KeywordInput;

    const createdKeyword = await KeywordService.create({ keyword, type });
    return res.json(createdKeyword);
  } catch (error) {
    next(error);
  }
};

export const bulkCreate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keywords = req.body.keywords as KeywordInput[];

    const createdKeywords = await KeywordService.bulkCreate(keywords);
    return res.json(createdKeywords);
  } catch (error) {
    next(error);
  }
};
