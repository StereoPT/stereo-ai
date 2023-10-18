import { Router } from 'express';
import { findAll } from '../controllers/keywords.controller.js';

const router = Router();

// Returns all Keywords
router.get('/', findAll);

// Adds new Keywords
router.post('/', (req, res, next) => {
  try {
    res.json({ message: 'POST Keywords' });
  } catch (error) {
    next(error);
  }
});

export default router;
