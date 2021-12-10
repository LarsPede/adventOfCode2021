import data from '../../data/second.js';

const horVer = data.reduce((acc, el) => {
  switch(el) {
    case el.startsWith('forward'): 
      console.log('here');
      acc.ver++;
      break;
    default: 
  }
  return acc;
}, {hor: 0, ver: 0});

console.log(horVer);
