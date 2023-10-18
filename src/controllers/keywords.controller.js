import db from '../db/db.js';

export const findAll = async (req, res, next) => {
  try {
    const { keywords: dbKeywords } = db.data;

    if (dbKeywords.length <= 0) return res.json([]);

    return res.json(dbKeywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { keywords } = req.body;
    const splitKeywords = keywords.split(',').map((k) => k.trim());

    if (splitKeywords.length <= 0) return res.json([]);

    // Save without duplicates
    const { keywords: dbKeywords } = db.data;
    const newKeywords = [
      ...dbKeywords,
      ...splitKeywords.filter((k) => dbKeywords.includes(k)),
    ];
    dbKeywords = newKeywords;

    await db.write();

    return res.json(splitKeywords);
  } catch (error) {
    next(error);
  }
};
