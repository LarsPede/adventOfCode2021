import data from '../../data/second.js';

const horVer = data.reduce((acc, el) => {
  const command = el.split(' ');
  switch(command[0]) {
    case 'forward':
      acc.hor-=-command[1];
      break;
    case 'up':
      acc.ver-=command[1];
      break;
    case 'down':
      acc.ver-=-command[1];
      break;
    default: 
  }
  return acc;
}, {hor: 0, ver: 0});

console.log(horVer.hor * horVer.ver);
