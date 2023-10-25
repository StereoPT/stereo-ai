import { Router } from 'express';

import { generate } from '../controllers/generations.controller';

const router = Router();

router.get('/', generate);

export default router;
