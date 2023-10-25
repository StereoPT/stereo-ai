import { BulkCreateKeyword } from '../interfaces/keyword.interface';
import { Keyword } from '../models/keywords.model';
import { Random } from 'random-js';
import { cleanKeywords } from '../utils/keywords';

const findAll = async (attributes: []) => {
  const keywords = await Keyword.findAll({ attributes });
  if (keywords.length <= 0) return [];

  return keywords;
};

const findAllWhere = async (attributes: [], where: {}) => {
  const keywords = await Keyword.findAll({ attributes, where });
  if (keywords.length <= 0) return [];

  return keywords;
};

const findRandom = async (attributes: any, where: {}, amount = 20) => {
  const keywords = (await findAllWhere(attributes, where)) as any;
  const shuffledKeywords = new Random()
    .shuffle(keywords)
    .flatMap((k: any) => k.keyword);
  const randomKeywords = shuffledKeywords.slice(0, amount);

  return randomKeywords;
};

const bulkCreate = async ({ keywords, type }: BulkCreateKeyword) => {
  if (!keywords || !type) return;

  const splitKeywords = cleanKeywords(keywords, type) as [];
  if (splitKeywords.length <= 0) return [];

  // Save without duplicates
  const createdKeywords = await Keyword.bulkCreate(splitKeywords, {
    ignoreDuplicates: true,
  });

  return createdKeywords;
};

export default {
  findAll,
  findAllWhere,
  findRandom,
  bulkCreate,
};
