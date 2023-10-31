import { Prompt, PromptInput, PromptOptions } from '../models/prompt.model';
import KeywordService from './keywords.service';
import { splitPrompt } from '../utils/prompt';

const findAll = async (options?: PromptOptions): Promise<Prompt[]> => {
  const prompts = await Prompt.findAll(options);
  if (prompts.length <= 0) return [];

  return prompts;
};

const create = async (prompt: PromptInput): Promise<Prompt> => {
  const promptOptions = {
    where: { prompt: prompt.prompt, type: prompt.type },
  };
  const foundPrompt = await Prompt.findOne(promptOptions);
  if (foundPrompt) return foundPrompt;

  const createdPrompt = await Prompt.create(prompt);

  const bulkKeywords = splitPrompt(createdPrompt.prompt, createdPrompt.type);
  if (bulkKeywords.length <= 0) throw new Error('No Keywords Found!');

  await KeywordService.bulkCreate(bulkKeywords);

  return createdPrompt;
};

export default {
  findAll,
  create,
};
