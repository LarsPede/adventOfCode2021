import data from '../../data/second.js';

const position = data.reduce((acc, el) => {
  const command = el.split(' ');
  switch(command[0]) {
    case 'forward':
      acc.horizontal-=-command[1];
      acc.depth-=-command[1]*acc.aim;
      break;
    case 'up':
      acc.aim-=command[1];
      break;
    case 'down':
      acc.aim-=-command[1];
      break;
    default: 
  }
  return acc;
}, {depth: 0, horizontal: 0, aim: 0});

console.log(position.depth*position.horizontal);
