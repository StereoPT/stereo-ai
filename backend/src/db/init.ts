import { Image } from '../models/image.model';
import { Keyword } from '../models/keyword.model';
import { Model } from '../models/model.model';

export const initializeDatabase = () =>
  Promise.all([
    Model.sync({ alter: true, logging: false }),
    Keyword.sync({ alter: true, logging: false }),
    Image.sync({ alter: true, logging: false }),
  ]);
