import express, { json } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { KeywordsRoutes } from './routes/index.js';
import { NotFound, ErrorHandler } from './middleware/index.js';

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
  })
);
app.use(json());

console.log('[StereoAI]');

app.get('/', (req, res) => {
  res.json({ message: 'StereoAI' });
});

app.use('/api/keywords', KeywordsRoutes);
app.use(NotFound, ErrorHandler);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}/`);
});
