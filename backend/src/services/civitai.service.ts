import axios from 'axios';
import { CivitaiInput, CivitaiOutput } from '../interfaces/civitai.interfaces';
import PromptsService from './prompts.service';

import { Random } from 'random-js';
import { stringify } from 'qs';

const CIVITAI_URL = 'https://civitai.com/api/v1';
const SORT = ['Most Reactions', 'Most Comments', 'Newest'];
const PERIOD = ['AllTime', 'Year', 'Month', 'Week', 'Day'];

const getImages = async (civitai: CivitaiInput): Promise<CivitaiOutput> => {
  let output: CivitaiOutput = { images: [] };
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
    });

    await PromptsService.create({
      prompt: image.meta.negativePrompt,
      type: 'negative',
    });

    output.images.push({
      link: image.url,
      nsfw: image.nsfw,
      model: image.meta.model || 'unknown',
      steps: image.meta.steps || -1,
      sampler: image.meta.sampler || 'unknown',
      cfgScale: image.meta.cfgScale || -1,
    });
  }

  return output;
};

export default { getImages };
