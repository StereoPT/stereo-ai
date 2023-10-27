import { Router } from 'express';
import { create, findAll } from '../controllers/prompts.controller';

const router = Router();

// Returns all Prompts
router.get('/', findAll);

// Adds a new Prompt
router.post('/', create);

export default router;
