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
  const imageOptions = {
    where: { uuid: image.uuid },
  };
  const foundImage = await Image.findOne(imageOptions);
  if (foundImage) return foundImage;

  const createdImage = await Image.create({ uuid: uuidv4(), ...image });

  const bulkPositiveKeywords = splitPrompt(
    createdImage.positivePrompt,
    'positive',
  );
  const bulkNegativeKeywords = splitPrompt(
    createdImage.negativePrompt,
    'negative',
  );

  if (bulkPositiveKeywords.length <= 0 || bulkNegativeKeywords.length <= 0)
    throw new Error('No Keywords Found!');

  await KeywordService.bulkCreate(bulkPositiveKeywords);
  await KeywordService.bulkCreate(bulkNegativeKeywords);

  return createdImage;
};

export default {
  findAll,
  create,
};
