import { Router } from 'express';
import { generate } from '../controllers/generations.controller';

const router = Router();

// Creates a New Generation
router.get('/', generate);

export default router;
