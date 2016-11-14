var express = require('express');
var router = express.Router();

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

router.get('/', (req, res) => {
  res.json(pc.hdd);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const hdds = pc.hdd;

  if (id >= 0 && id < hdds.length) {
    res.json(hdds[id]);
  } else {
    res.status(404).send('Not Found');
  }
});

router.get('/:id/vendor', (req, res) => {
  const id = req.params.id;
  const hdds = pc.hdd;

  if (id >= 0 && id < hdds.length) {
    res.json(hdds[id].vendor);
  } else {
    res.status(404).send('Not found');
  }
});

router.get('/:id/size', (req, res) => {
  const id = req.params.id;
  const hdds = pc.hdd;

  if (id >= 0 && id < hdds.length) {
    res.json(hdds[id].size);
  } else {
    res.status(404).send('Not found');
  }
});

router.get('/:id/volume', (req, res) => {
  const id = req.params.id;
  const hdds = pc.hdd;

  if (id >= 0 && id < hdds.length) {
    res.json(hdds[id].volume);
  } else {
    res.status(404).send('Not found');
  }
});

module.exports = router;
