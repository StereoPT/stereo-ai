import { Model } from '../models/models.model.js';
import { Keyword } from '../models/keywords.model.js';
import random from 'random';

export const generate = async (req, res, next) => {
  try {
    const models = await Model.findAll();
    const randomModel = random.choice(models);

    const keywords = {
      positive: await Keyword.findAll({
        attributes: ['keyword'],
        where: { type: 'positive' },
      }),
      negative: await Keyword.findAll({
        attributes: ['keyword'],
        where: { type: 'negative' },
      }),
    };

    const shuffled = {
      positive: keywords.positive
        .sort(() => 0.5 - random.float())
        .flatMap((k) => k.keyword),
      negative: keywords.negative
        .sort(() => 0.5 - random.float())
        .flatMap((k) => k.keyword),
    };

    const randomKeywords = {
      positive: shuffled.positive.slice(0, 20),
      negative: shuffled.negative.slice(0, 20),
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
