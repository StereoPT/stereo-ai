import { Keyword } from '../models/keywords.model';
import { Model } from '../models/models.model';

export const initializeDatabase = () =>
  Promise.all([Model.sync({ alter: true }), Keyword.sync({ alter: true })]);
