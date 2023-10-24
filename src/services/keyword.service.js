import { Keyword } from '../models/keywords.model.js';
import random from 'random';

const findAll = async () => {
  const keywords = await Keyword.findAll();
  if (keywords.length <= 0) return [];

  return keywords;
};

const bulkCreate = async ({ keywords, type }) => {
  if (!keywords || !type) return;

  const splitKeywords = splitKeywords(keywords);
  if (splitKeywords.length <= 0) return [];

  // Save without duplicates
  const createdKeywords = await Keyword.bulkCreate(splitKeywords, {
    ignoreDuplicates: true,
  });

  return createdKeywords;
};

const splitKeywords = (keywords) => {
  if (!keywords) return;

  const REGEX_REMOVE_PARENTHESIS = /([()])/g;
  const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;

  const cleanKeywords = keywords
    .replace(REGEX_REMOVE_PARENTHESIS, '')
    .replace(REGEX_REMOVE_TAGS, '')
    .split(',')
    .filter((k) => k.trim())
    .map((k) => ({
      keyword: k.trim().split(':').shift(),
      type,
    }));

  return cleanKeywords;
};

export default {
  findAll,
  bulkCreate,
};
