import { Keyword } from '../models/keywords.model.js';

export const findAll = async (req, res, next) => {
  try {
    const keywords = await Keyword.findAll();
    if (keywords.length <= 0) return res.json([]);

    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { keywords, type } = req.body;
    const splitKeywords = keywords
      .replace(/([()])/g, '')
      .replace(/<\b(.*?)>/g, '')
      .split(',')
      .filter((k) => k.trim())
      .map((k) => ({
        keyword: k.trim().split(':').shift(),
        type,
      }));

    if (splitKeywords.length <= 0) return res.json([]);

    // Save without duplicates
    const createdKeywords = await Keyword.bulkCreate(splitKeywords, {
      ignoreDuplicates: true,
    });

    return res.json(createdKeywords);
  } catch (error) {
    next(error);
  }
};
