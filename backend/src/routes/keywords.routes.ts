import { Router } from 'express';
import {
  findAll,
  create,
  bulkCreate,
} from '../controllers/keywords.controller';

const router = Router();

// Returns all Keywords
router.get('/', findAll);

// Add new Keyword
router.post('/', create);

// Adds Bulk Keywords
router.post('/bulk', bulkCreate);

export default router;
