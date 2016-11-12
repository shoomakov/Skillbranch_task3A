
var express = require('express');
var router = express.Router();

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
