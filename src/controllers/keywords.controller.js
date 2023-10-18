import db from '../db/db.js';

export const findAll = async (req, res, next) => {
  try {
    const { keywords } = db.data;

    if (keywords.length <= 0) return res.json([]);

    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};
