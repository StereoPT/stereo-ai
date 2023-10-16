import express, { json } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

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

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}/`);
});
