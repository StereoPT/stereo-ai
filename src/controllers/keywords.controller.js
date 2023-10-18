import db, { keywords } from '../db/db.js';

export const findAll = async (req, res, next) => {
  try {
    if (keywords.length <= 0) return res.json([]);

    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { keywords: bodyKeywords } = req.body;
    const splitKeywords = bodyKeywords.split(',').map((k) => k.trim());

    if (splitKeywords.length <= 0) return res.json([]);

    // Save without duplicates
    keywords.push(...splitKeywords.filter((k) => !keywords.includes(k)));
    await db.write();

    return res.json(splitKeywords);
  } catch (error) {
    next(error);
  }
};
