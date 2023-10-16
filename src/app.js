import express, { json } from 'express';

const app = express();

app.use(json());

console.log('[StereoAI]');

app.get('/', (req, res) => {
  res.json({ message: 'StereoAI' });
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}/`);
});
