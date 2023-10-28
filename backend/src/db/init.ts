import { Keyword } from '../models/keyword.model';
import { Model } from '../models/model.model';
import { Prompt } from '../models/prompt.model';

export const initializeDatabase = () =>
  Promise.all([
    Model.sync({ alter: true, logging: false }),
    Keyword.sync({ alter: true, logging: false }),
    Prompt.sync({ alter: true, logging: false }),
  ]);
