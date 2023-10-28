import { CivitaiInput } from '../interfaces/civitai.interfaces';
import ModelsService from './models.service';

const getImages = async ({ modelId, limit, sort, period }: CivitaiInput) => {
  const model = modelId ?? (await ModelsService.findRandom({})).modelId;

  return { message: { model } };
};

export default { getImages };
