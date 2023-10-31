import ModelService from '../services/models.service';
import KeywordService from '../services/keywords.service';
import { Random } from 'random-js';
import { addRandomStrength } from '../utils/keywords';

const generate = async () => {
  const random = new Random();

  const randomModel = await ModelService.findRandom();
  const positiveKeywords = await KeywordService.findRandom(
    random.integer(15, 35),
    {
      attributes: ['keyword'],
      where: { type: 'positive' },
    },
  );
  const negativeKeywords = await KeywordService.findRandom(
    random.integer(15, 35),
    {
      attributes: ['keyword'],
      where: { type: 'negative' },
    },
  );

  const randomPositiveKeywords = addRandomStrength(positiveKeywords);
  const randomNegativeKeywords = addRandomStrength(negativeKeywords);

  return {
    model: `${randomModel.get('name')} v${randomModel.get('version')}`,
    prompt: {
      positive: randomPositiveKeywords.join(', '),
      negative: randomNegativeKeywords.join(', '),
    },
    keywords: {
      positive: randomPositiveKeywords,
      negative: randomNegativeKeywords,
    },
  };
};

export default { generate };
