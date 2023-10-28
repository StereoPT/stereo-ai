import { NextFunction, Request, Response } from 'express';
import ModelService from '../services/models.service';
import KeywordService from '../services/keywords.service';

export const generate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const randomModel = (await ModelService.findRandom({})) as any;

    const randomKeywords = {
      positive: await KeywordService.findRandom({
        attributes: ['keyword'],
        where: { type: 'positive' },
      }),
      negative: await KeywordService.findRandom({
        attributes: ['keyword'],
        where: { type: 'negative' },
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
