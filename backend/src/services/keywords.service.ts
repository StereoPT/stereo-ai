import { Keyword, KeywordInput, KeywordOptions } from '../models/keyword.model';
import { Random } from 'random-js';

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

const create = async (keyword: KeywordInput): Promise<Keyword> => {
  const createdKeyword = await Keyword.create(keyword);

  return createdKeyword;
};

const bulkCreate = async (keywords: KeywordInput[]): Promise<Keyword[]> => {
  const createdKeywords = await Keyword.bulkCreate(keywords, {
    ignoreDuplicates: true,
  });

  return createdKeywords;
};

export default {
  findAll,
  findAllWhere,
  findRandom,
  create,
  bulkCreate,
};
