import { Router } from 'express';
import { create, findAll } from '../controllers/images.controller';

const router = Router();

// Returns all Images
router.get('/', findAll);

// Adds a new Image
router.post('/', create);

export default router;
