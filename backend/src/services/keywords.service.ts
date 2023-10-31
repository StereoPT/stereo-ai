import { Keyword, KeywordInput, KeywordOptions } from '../models/keyword.model';
import { Random } from 'random-js';

const findAll = async (options?: KeywordOptions): Promise<Keyword[]> => {
  const keywords = await Keyword.findAll(options);
  if (keywords.length <= 0) return [];

  return keywords;
};

const findAllWhere = async (options?: KeywordOptions): Promise<Keyword[]> => {
  const keywords = await Keyword.findAll(options);
  if (keywords.length <= 0) return [];

  return keywords;
};

const findRandom = async (
  amount: number,
  options?: KeywordOptions,
): Promise<string[]> => {
  const keywords = await findAllWhere(options);
  if (keywords.length <= 0) throw new Error('No Keywords Found!');

  const shuffledKeywords = new Random()
    .shuffle(keywords)
    .flatMap((k) => k.keyword);
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
