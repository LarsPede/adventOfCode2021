import {puzzleInput} from '../../data/eight.js';

const puzzleVals = puzzleInput.map(puzzleVal => puzzleVal.split('|'));

let count = 0;

puzzleVals.forEach(([inputs, outputs]) => {
  let outputDigit = "";
  const digits = Array(10).fill([]);
  inputs.split(';').forEach((digit) => {
    const splitDigit = digit.split('');
    switch(splitDigit.length) {
      case 2:
        digits[1] = digits[1].concat(splitDigit);
        break;
      case 4:
        digits[4] = digits[4].concat(splitDigit);
        break;
      case 3:
        digits[7] = digits[7].concat(splitDigit);
        break;
      case 7:
        digits[8] = digits[8].concat(splitDigit);
        break;
      default:
        break;
    }
  });
  const fourOneDiff = digits[4].filter(x => !digits[1].includes(x));

  outputs.split(';').forEach((digit) => {
    const splitDigit = digit.split('');
    switch(splitDigit.length) {
      case 2:
        outputDigit = `${outputDigit}1`;
        break;
      case 3:
        outputDigit = `${outputDigit}7`;
        break;
      case 4:
        outputDigit = `${outputDigit}4`;
        break;
      case 5:
        if (digits[7].every(x => splitDigit.includes(x))) {
          outputDigit = `${outputDigit}3`;
        } else if (fourOneDiff.every(x => splitDigit.includes(x))) {
          outputDigit = `${outputDigit}5`;
        } else {
          outputDigit = `${outputDigit}2`;
        }
        break;
      case 6:
        if (digits[4].every(x => splitDigit.includes(x))) {
          outputDigit = `${outputDigit}9`;
        } else if (digits[1].every(x => splitDigit.includes(x))) {
          outputDigit = `${outputDigit}0`;
        } else {
          outputDigit = `${outputDigit}6`;
        }
        break;
      case 7:
        outputDigit = `${outputDigit}8`;
        break;
      default:
        break;
    }
  });
  count += parseInt(outputDigit, 10);
});


console.log('result ', count);
