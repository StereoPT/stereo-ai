import { Router } from 'express';
import { findAll, create } from '../controllers/keywords.controller.js';

const router = Router();

// Returns all Keywords
router.get('/', findAll);

// Adds new Keywords
router.post('/', create);

export default router;
