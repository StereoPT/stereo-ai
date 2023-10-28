import { Keyword } from '../models/keywords.models';
import { Model } from '../models/models.models';
import { Prompt } from '../models/prompts.models';

export const initializeDatabase = () =>
  Promise.all([
    Model.sync({ alter: true }),
    Keyword.sync({ alter: true }),
    Prompt.sync({ alter: true }),
  ]);
