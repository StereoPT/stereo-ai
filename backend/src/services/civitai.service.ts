import axios from 'axios';
import wait from 'waait';
import {
  CivitaiImage,
  CivitaiInput,
  CivitaiOutput,
} from '../interfaces/civitai.interfaces';
import PromptsService from './prompts.service';
import ModelService from './models.service';

import { Random } from 'random-js';
import { stringify } from 'qs';

const CIVITAI_URL = 'https://civitai.com/api/v1';
const SORT = ['Most Reactions', 'Most Comments', 'Newest'];
const PERIOD = ['AllTime', 'Year', 'Month', 'Week', 'Day'];

const civitaiModelImages = async (
  civitai: CivitaiInput,
): Promise<CivitaiImage[]> => {
  const civitaiImages = [];
  const random = new Random();

  const queryParams = {
    modelId: civitai.modelId,
    limit: civitai.limit ?? random.integer(5, 25),
    sort: civitai.sort ?? random.pick(SORT),
    period: civitai.period ?? random.pick(PERIOD),
  };

  const {
    data: { items: images },
  } = await axios.get(`${CIVITAI_URL}/images?${stringify(queryParams)}`);
  if (!images) throw new Error('Failed to get Images from Civitai');

  for (const image of images) {
    if (!image.meta?.prompt || !image.meta?.negativePrompt) continue;

    // Get Prompts from Images Here
    await PromptsService.create({
      prompt: image.meta.prompt,
      type: 'positive',
      nsfw: image.nsfw,
    });

    await PromptsService.create({
      prompt: image.meta.negativePrompt,
      type: 'negative',
      nsfw: image.nsfw,
    });

    civitaiImages.push({
      link: image.url,
      nsfw: image.nsfw,
      model: image.meta.Model || 'unknown',
      steps: image.meta.steps || -1,
      sampler: image.meta.sampler || 'unknown',
      cfgScale: image.meta.cfgScale || -1,
    });
  }

  return civitaiImages;
};

const getImages = async (civitai: CivitaiInput): Promise<CivitaiOutput> => {
  const images = await civitaiModelImages(civitai);
  return { images };
};

const getModelImages = async (
  civitai: CivitaiInput,
): Promise<CivitaiOutput[]> => {
  let output: CivitaiOutput[] = [];

  const models = await ModelService.findAll();

  for (const model of models) {
    const images = await civitaiModelImages({
      ...civitai,
      modelId: model.modelId.toString(),
    });
    output.push({ images });

    await wait(2000);
  }

  return output;
};

export default { getImages, getModelImages };
