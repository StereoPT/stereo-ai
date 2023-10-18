import { Router } from 'express';
import {
  findAll,
  findRandom,
  create,
} from '../controllers/models.controller.js';

const router = Router();

// Returns all Models
router.get('/', findAll);

// Returns random Model
router.get('/random', findRandom);

// Adds new Models
router.post('/', create);

export default router;
