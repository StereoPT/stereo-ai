import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import MessageResponse from './interfaces/MessageResponse';

// import {
//   KeywordsRoutes,
//   ModelRoutes,
//   GenerationRoutes,
// } from './routes/index.js';
import { NotFound, ErrorHandler } from './middlewares';

import './db';

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
  }),
);
app.use(express.json());

console.log('[StereoAI]');

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({ message: 'StereoAI' });
});

// app.use('/api/keywords', KeywordsRoutes);
// app.use('/api/models', ModelRoutes);
// app.use('/api/generations', GenerationRoutes);
app.use(NotFound, ErrorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});