import KeywordService from '../services/keyword.service.js';

export const findAll = async (req, res, next) => {
  try {
    const keywords = await KeywordService.findAll();
    return res.json(keywords);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { keywords, type } = req.body;

    const createdKeywords = await KeywordService.bulkCreate({ keywords, type });
    return res.json(createdKeywords);
  } catch (error) {
    next(error);
  }
};
