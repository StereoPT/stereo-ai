import { KeywordInput } from '../models/keywords.models';
import { PromptInput } from '../models/prompts.models';

export const splitPrompt = ({ prompt, type }: PromptInput): KeywordInput[] => {
  const REGEX_REMOVE_PARENTHESIS = /([()])/g;
  const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;

  const keywords = prompt
    .replace(REGEX_REMOVE_PARENTHESIS, '')
    .replace(REGEX_REMOVE_TAGS, '')
    .split(',')
    .filter((k) => k.trim())
    .map((k) => ({
      keyword: k.trim().split(':').shift() as string,
      type,
    }));

  return keywords;
};