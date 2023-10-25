import ModelService from '../services/models.service.js';
import KeywordService from '../services/keyword.service.js';
import { NextFunction, Request, Response } from 'express';

export const generate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const randomModel = await ModelService.findRandom();

    const randomKeywords = {
      positive: await KeywordService.findRandom(['keyword'], {
        type: 'positive',
      }),
      negative: await KeywordService.findRandom(['keyword'], {
        type: 'negative',
      }),
    };

    return res.json({
      model: `${randomModel.get('name')} v${randomModel.get('version')}`,
      prompt: {
        positive: randomKeywords.positive.join(', '),
        negative: randomKeywords.negative.join(', '),
      },
      keywords: {
        positive: randomKeywords.positive,
        negative: randomKeywords.negative,
      },
    });
  } catch (error) {
    next(error);
  }
};
