import { Request } from '../interfaces/routes.interfaces';
import { NextFunction, Response } from 'express';
import KeywordService from '../services/keywords.service';
import { KeywordInput } from '../models/keyword.model';

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keywords = await KeywordService.findAll();
    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request<KeywordInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { keyword, type } = req.body;

    const createdKeyword = await KeywordService.create({
      keyword,
      type,
      usages: 1,
    });
    return res.json(createdKeyword);
  } catch (error) {
    next(error);
  }
};

export const bulkCreate = async (
  req: Request<KeywordInput[]>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keywords = req.body;

    const createdKeywords = await KeywordService.bulkCreate(keywords);
    return res.json(createdKeywords);
  } catch (error) {
    next(error);
  }
};
