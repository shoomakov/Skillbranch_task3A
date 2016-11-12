import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express(),
      router = express.Router(),
      port = 8080;

const board   = require('./path/board'),
      ram     = require('./path/ram'),
      hdd     = require('./path/hdd'),
      volumes = require('./path/volumes');

const file = 'http://92.53.104.165/_skb/pc.json';

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

app.use((req, res) => {
  res.status(404).send('Not found');
  return;
});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}!`);
});
