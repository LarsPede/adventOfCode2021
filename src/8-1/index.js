import {puzzleInput} from '../../data/eigth.js';

const outputValues = puzzleInput.map(puzzleVal => puzzleVal.split('|')[1]);

let count = 0;

outputValues.forEach((val) => {
  val.split(';').forEach((digit) => {
    switch(digit.length) {
      case 2:
      case 4:
      case 3:
      case 7:
        count++;
        break;
      default:
        break;
    }
  });
});

console.log('result ', count);
