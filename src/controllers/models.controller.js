import db, { models } from '../db/db.js';
import random from 'random';

export const findAll = async (req, res, next) => {
  try {
    if (models.length <= 0) return res.json([]);

    return res.json(models);
  } catch (error) {
    next(error);
  }
};

export const findRandom = async (req, res, next) => {
  try {
    if (models.length <= 0) return res.json('');
    const randomModel = random.choice(models);

    return res.json({ model: randomModel });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { model: bodyModel } = req.body;

    if (!bodyModel) return res.json('');

    models.push(bodyModel);
    await db.write();

    return res.json({ model: bodyModel });
  } catch (error) {
    next(error);
  }
};
