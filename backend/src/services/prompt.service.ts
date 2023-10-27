import { Prompt, PromptInput } from '../models/prompt.model';

const findAll = async (): Promise<Prompt[]> => {
  const prompts = await Prompt.findAll();
  if (prompts.length <= 0) return [];

  return prompts;
};

const create = async ({ prompt, type }: PromptInput): Promise<Prompt> => {
  const createdPrompt = await Prompt.create({ prompt, type });

  return createdPrompt;
};

export default {
  findAll,
  create,
};
