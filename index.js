import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express(),
      router = express.Router(),
      port = 8081;

const board   = require('./board'),
      ram     = require('./ram'),
      hdd     = require('./hdd'),
      volumes = require('./volumes');

const file = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(file)
  .then(async (response) => {
    const result = await response.json();
    pc = result;
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

app.use(cors());

app.get('/', (req, res) => {
  res.json(pc);
});

app.use('/board', board);
app.use('/ram', ram);
app.use('/hdd', hdd);
app.use('/volumes', volumes);

app.get('/os', (req, res) => {
  res.json(pc.os);
});

app.get('/floppy', (req, res) => {
  res.json(pc.floppy);
});

app.get('/monitor', (req, res) => {
  res.json(pc.monitor);
});

app.get('/length', (req, res) => {
  res.json(pc.length);
});

app.get('/height', (req, res) => {
  res.json(pc.height);
});

app.get('/width', (req, res) => {
  res.json(pc.width);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
  return;
});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}!`);
});
