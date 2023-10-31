import { KeywordInput } from '../models/keyword.model';
import { PromptInput } from '../models/prompt.model';

const REGEX_REMOVE_PARENTHESIS = /([(){}])/g;
const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;
const KEYWORD_MAX_LENGTH = 50;

export const splitPrompt = ({ prompt, type }: PromptInput): KeywordInput[] => {
  const replacedPrompt = prompt
    .replace(REGEX_REMOVE_PARENTHESIS, '')
    .replace(REGEX_REMOVE_TAGS, '')
    .replaceAll('.', ',');

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
      keyword: k.trim().split(':').shift() as string,
      type,
    }));

  return keywords;
};
