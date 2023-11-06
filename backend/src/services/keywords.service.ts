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

const createOrUpdate = async (keyword: KeywordInput): Promise<Keyword> => {
  const keywordWhere = { keyword: keyword.keyword, type: keyword.type };

  const foundKeyword = await Keyword.findOrCreate({
    where: keywordWhere,
    defaults: { ...keyword },
  });

  if (foundKeyword[1]) return foundKeyword[0];

  const updatedKeyword = await Keyword.update(
    { ...keyword, usages: foundKeyword[0].usages + 1 },
    {
      where: keywordWhere,
      returning: true,
    },
  );

  return updatedKeyword[1][0];
};

const bulkCreate = async (keywords: KeywordInput[]): Promise<Keyword[]> => {
  const createdKeywords = await Keyword.bulkCreate(keywords, {
    ignoreDuplicates: true,
  });

  return createdKeywords;
};

const bulkCreateOrUpdate = async (
  keywords: KeywordInput[],
): Promise<Keyword[]> => {
  let ouput: Keyword[] = [];

  for (const keyword of keywords) {
    const createdOrUpdatedKeyword = await createOrUpdate(keyword);
    ouput.push(createdOrUpdatedKeyword);
  }

  return ouput;
};

export default {
  findAll,
  findAllWhere,
  findRandom,
  create,
  createOrUpdate,
  bulkCreate,
  bulkCreateOrUpdate,
};
