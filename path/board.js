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

// router.get('/', async (req, res) => {
//   const response = await fetch(file);
//   const pc = await response.json();
//    console.log(req.originalUrl);
//    console.log(req.path);
//   //console.log(pc.board);
//   res.send(pc.board);
// });
//
//
//
// router.get('/vendor', async (req, res) => {
//   const response = await fetch(file);
//   const pc = await response.json();
//
//   // pc.volumes = {}
//   // for(let key in pc.hdd){
//   //   const drive = pc.hdd[key].volume;
//   //   if( !pc.volumes[drive] ){
//   //      pc.volumes[drive] = pc.hdd[key].size;
//   //   }else{
//   //      pc.volumes[drive] += pc.hdd[key].size;
//   //   }
//   // }
//
//   console.log(req.params.id);
//   //const par = await JSON.parse(pc);
// //  console.log(par);
//
//   res.send(pc.board);
// });

module.exports = router;
