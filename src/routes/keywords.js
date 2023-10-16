import { Router } from 'express';

const router = Router();

// Returns all Keywords
router.get('/', (req, res, next) => {
  try {
    res.json({ message: 'GET Keywords' });
  } catch (error) {
    next(error);
  }
});

// Adds new Keywords
router.post('/', (req, res, next) => {
  try {
    res.json({ message: 'POST Keywords' });
  } catch (error) {
    next(error);
  }
});

export default router;
