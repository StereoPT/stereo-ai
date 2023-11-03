import axios from 'axios';
import wait from 'waait';
import { CivitaiInput } from '../interfaces/civitai.interfaces';
import { Image } from '../models/image.model';
import ImageService from './images.service';
import ModelService from './models.service';

import { Random } from 'random-js';
import { stringify } from 'qs';

const CIVITAI_URL = 'https://civitai.com/api/v1';
const SORT = ['Most Reactions', 'Most Comments', 'Newest'];
const PERIOD = ['AllTime', 'Year', 'Month', 'Week', 'Day'];

const civitaiModelImages = async (civitai: CivitaiInput): Promise<Image[]> => {
  const civitaiImages: Image[] = [];
  const random = new Random();

  const queryParams = {
    modelId: civitai.modelId,
    limit: civitai.limit ?? random.integer(5, 25),
    nsfw: civitai.nsfw,
    sort: civitai.sort ?? random.pick(SORT),
    period: civitai.period ?? random.pick(PERIOD),
  };

  const {
    data: { items: images },
  } = await axios.get(`${CIVITAI_URL}/images?${stringify(queryParams)}`);
  if (!images) throw new Error('Failed to get Images from Civitai');

  for (const image of images) {
    if (!image.meta?.prompt || !image.meta?.negativePrompt) continue;

    const civitaiImage = await ImageService.create({
      id: image.id,
      nsfw: image.nsfw,
      url: image.url,
      model: image.meta.Model || 'unknown',
      positivePrompt: image.meta?.prompt,
      negativePrompt: image.meta?.negativePrompt,
      width: image.width,
      height: image.height,
      steps: image.meta.steps || -1,
      sampler: image.meta.sampler || 'unknown',
      cfgScale: image.meta.cfgScale || -1,
      clipSkip: image.meta['Clip skip'] || -1,
    });

    civitaiImages.push(civitaiImage);
  }

  return civitaiImages;
};

const getImages = async (civitai: CivitaiInput): Promise<Image[]> => {
  const images = await civitaiModelImages(civitai);
  return images;
};

const getModelImages = async (civitai: CivitaiInput): Promise<Image[]> => {
  let output: Image[] = [];
  const models = await ModelService.findAll();

  for (const model of models) {
    const images = await civitaiModelImages({
      ...civitai,
      modelId: model.modelId.toString(),
    });
    output.push(...images);

    await wait(2000);
  }

  return output;
};

export default { getImages, getModelImages };
