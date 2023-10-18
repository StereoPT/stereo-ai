import { Router } from 'express';

import { generate } from '../controllers/generations.controller.js';

const router = Router();

router.get('/', generate);

export default router;
