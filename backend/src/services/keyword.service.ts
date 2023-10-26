import {
  BulkKeywordInput,
  Keyword,
  KeywordOptions,
} from '../models/keywords.model';
import { Random } from 'random-js';
import { cleanKeywords } from '../utils/keywords';

const findAll = async ({ attributes }: KeywordOptions): Promise<Keyword[]> => {
  const keywords = await Keyword.findAll({ attributes });
  if (keywords.length <= 0) return [];

  return keywords;
};

const findAllWhere = async ({
  attributes,
  where,
}: KeywordOptions): Promise<Keyword[]> => {
  const keywords = await Keyword.findAll({ attributes, where });
  if (keywords.length <= 0) return [];

  return keywords;
};

const findRandom = async (
  { attributes, where }: KeywordOptions,
  amount = 20,
): Promise<Keyword[]> => {
  const keywords = await findAllWhere({ attributes, where });
  const shuffledKeywords = new Random()
    .shuffle(keywords)
    .flatMap((k: any) => k.keyword);
  const randomKeywords = shuffledKeywords.slice(0, amount);

  return randomKeywords;
};

const bulkCreate = async ({
  keywords,
  type,
}: BulkKeywordInput): Promise<Keyword[]> => {
  const splitKeywords = cleanKeywords({ keywords, type });
  if (splitKeywords.length <= 0) throw new Error('No Keywords Found!');

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
