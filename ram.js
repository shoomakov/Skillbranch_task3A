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
  res.json(pc.ram);
});

router.get('/vendor', (req, res) => {
  res.json(pc.ram.vendor);
});

router.get('/volume', (req, res) => {
  res.json(pc.ram.volume);
});

router.get('/pins', (req, res) => {
  res.json(pc.ram.pins);
});

module.exports = router;
