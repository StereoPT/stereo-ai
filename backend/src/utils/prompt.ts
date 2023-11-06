import { KeywordInput } from '../models/keyword.model';
import { KeywordType } from '../models/keyword.model';

const REGEX_REMOVE_PARENTHESIS = /([(){}])/g;
const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;
const REGEX_REMOVE_NEWLINE = /(\r\n|\n|\r)/g;
const KEYWORD_MAX_LENGTH = 60;

export const splitPrompt = (
  prompt: string,
  type: KeywordType,
): KeywordInput[] => {
  const replacedPrompt = prompt
    .replaceAll(REGEX_REMOVE_NEWLINE, '')
    .replaceAll(REGEX_REMOVE_PARENTHESIS, '')
    .replaceAll(REGEX_REMOVE_TAGS, '')
    .replaceAll('.', ',')
    .replaceAll('+', ',');

  const keywords = replacedPrompt
    .split(',')
    .filter((k) => k.trim())
    .filter((k) => {
      if (k.length > KEYWORD_MAX_LENGTH) {
        console.log(`[${k.length}]: ${replacedPrompt} -- ${k}`);
      }

      return k.length <= KEYWORD_MAX_LENGTH;
    })
    .map((k) => ({
      keyword: k.trim().split(':').shift()?.trim() as string,
      type,
      usages: 1,
    }));

  return keywords;
};
