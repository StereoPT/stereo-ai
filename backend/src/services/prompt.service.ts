import { Prompt, PromptInput } from '../models/prompt.model';
import KeywordService from './keyword.service';
import { splitPrompt } from '../utils/prompt';

const findAll = async (): Promise<Prompt[]> => {
  const prompts = await Prompt.findAll();
  if (prompts.length <= 0) return [];

  return prompts;
};

const create = async ({ prompt, type }: PromptInput): Promise<Prompt> => {
  const createdPrompt = await Prompt.create({ prompt, type });

  const bulkKeywords = splitPrompt({
    prompt: createdPrompt.prompt,
    type: createdPrompt.type,
  });

  if (bulkKeywords.length <= 0) throw new Error('No Keywords Found!');

  await KeywordService.bulkCreate(bulkKeywords);

  return createdPrompt;
};

export default {
  findAll,
  create,
};
