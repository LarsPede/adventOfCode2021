import data from '../../data/third.js';

const summedBits = data.reduce((acc, num) => {
  const splitBinary = num.split('');
  splitBinary.forEach((bit, index) => {
    if(bit == 1) {
      acc[index]++;
    } else {
      acc[index]--;
    }
  })
  return acc;
}, [
  0,0,0,0,
  0,0,0,0,
  0,0,0,0
]);
const rates = summedBits.reduce((acc, summedBit) => {
  if (summedBit > 0) {
    acc.gamma += "1";
    acc.epsilon += "0";
  } else if (summedBit < 0) {
    acc.gamma += "0";
    acc.epsilon += "1";
  }
  return acc;
}, {gamma: "", epsilon: ""});

const gammaDec = parseInt(rates.gamma, 2);
const epsilonDec = parseInt(rates.epsilon, 2);

console.log(gammaDec*epsilonDec);
