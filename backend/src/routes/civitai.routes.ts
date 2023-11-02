import { Router } from 'express';
import { getImages, getModelImages } from '../controllers/civitai.controller';

const router = Router();

// Used to Get Info from Civitai Images
router.post('/images', getImages);

// Used to Get Info from Civitai Images from our Models
router.post('/images/models', getModelImages);

export default router;
