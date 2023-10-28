import { Router } from 'express';
import { getImages } from '../controllers/civitai.controller';

const router = Router();

// Used to Get Info from Civitai Images
router.post('/images', getImages);

export default router;
