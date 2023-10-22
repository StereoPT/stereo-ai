import { Model } from '../models/models.model.js';
import { Keyword } from '../models/keywords.model.js';
import random from 'random';

export const generate = async (req, res, next) => {
  try {
    const models = await Model.findAll();
    const randomModel = random.choice(models);

    const keywords = await Keyword.findAll();
    const shuffledKeywords = keywords.sort(() => 0.5 - random.float());
    const randomKeywords = shuffledKeywords.slice(0, 20);

    const prompt = randomKeywords.join(', ');

    return res.json({
      model: randomModel,
      prompt: prompt,
      keywords: randomKeywords,
    });
  } catch (error) {
    next(error);
  }
};
