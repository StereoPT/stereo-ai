import { BulkKeywordInput, KeywordInput } from '../models/keywords.model';

export const cleanKeywords = ({
  keywords,
  type,
}: BulkKeywordInput): KeywordInput[] => {
  const REGEX_REMOVE_PARENTHESIS = /([()])/g;
  const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;

  const cKeywords = keywords
    .replace(REGEX_REMOVE_PARENTHESIS, '')
    .replace(REGEX_REMOVE_TAGS, '')
    .split(',')
    .filter((k) => k.trim())
    .map((k) => ({
      keyword: k.trim().split(':').shift() as string,
      type,
    }));

  return cKeywords;
};
