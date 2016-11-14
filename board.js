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

router.get('/', async (req, res) => {
  res.json(pc.board);
});

router.get('/vendor', (req, res) => {
  res.json(pc.board.vendor);
});

router.get('/model', (req, res) => {
  res.json(pc.board.model);
});

router.get('/cpu', (req, res) => {
  res.json(pc.board.cpu);
});

router.get('/cpu/model', (req, res) => {
  res.json(pc.board.cpu.model);
});

router.get('/cpu/hz', (req, res) => {
  res.json(pc.board.cpu.hz);
});

router.get('/image', (req, res) => {
  res.json(pc.board.image);
});

router.get('/video', (req, res) => {
  res.json(pc.board.video);
});

module.exports = router;
