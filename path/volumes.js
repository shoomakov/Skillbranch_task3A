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
  const hdds = pc.hdd;
  let hddC = 0;
  let hddD = 0;

  hdds.forEach((hdd) => {
    switch (hdd.volume) {
      case 'C:':
        hddC += hdd.size;
        break;
      case 'D:':
        hddD += hdd.size;
        break;
      default:
        hddC = 0;
        hddD = 0;
    }
  });

  res.json({
    'C:': `${hddC}B`,
    'D:': `${hddD}B`,
  });
});

module.exports = router;
