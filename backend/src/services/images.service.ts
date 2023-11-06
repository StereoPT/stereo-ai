import { Image, ImageInput, ImageOptions } from '../models/image.model';
import { v4 as uuidv4 } from 'uuid';
import KeywordService from './keywords.service';
import { splitPrompt } from '../utils/prompt';

const findAll = async (options?: ImageOptions): Promise<Image[]> => {
  const images = await Image.findAll(options);
  if (images.length <= 0) return [];

  return images;
};

const create = async (image: ImageInput): Promise<Image> => {
  const foundImage = await Image.findOne({ where: { id: image.id } });
  if (foundImage) return foundImage;

  const createdImage = await Image.create({ uuid: uuidv4(), ...image });

  const positiveKeywords = splitPrompt(createdImage.positivePrompt, 'positive');
  const negativeKeywords = splitPrompt(createdImage.negativePrompt, 'negative');

  if (positiveKeywords.length <= 0 || negativeKeywords.length <= 0)
    throw new Error('No Keywords Found!');

  await KeywordService.bulkCreateOrUpdate(positiveKeywords);
  await KeywordService.bulkCreateOrUpdate(negativeKeywords);

  return createdImage;
};

export default {
  findAll,
  create,
};
