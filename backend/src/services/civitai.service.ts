import axios from 'axios';
import { CivitaiInput } from '../interfaces/civitai.interfaces';
import ModelsService from './models.service';
import PromptsService from './prompts.service';

const getImages = async (civitai: CivitaiInput) => {
  const cModel = civitai.modelId ?? (await ModelsService.findRandom()).modelId;
  const cLimit = civitai.limit ?? 5;
  const cSort = civitai.sort ?? 'Most Reactions';
  const cPeriod = civitai.period ?? 'Week';

  const { data } = await axios.get(
    `https://civitai.com/api/v1/images?modelId=${cModel}&limit=${cLimit}&sort=${cSort}&period=${cPeriod}`,
  );
  const { items: images } = data;

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
  }

  return images;
};

export default { getImages };
