import data from '../../data/third.js';

const getTopBit = (dataSet, index, oxygen) => {
  const summedBit = dataSet.reduce((acc, num) => {
    const bit = num.split('')[index];
      if(bit == 1) {
        acc++;
      } else {
        acc--;
      }
    return acc;
  }, 0);
  if (summedBit >= 0) {
    return oxygen ? "1" : "0";
  } else if (summedBit < 0) {
    return oxygen ? "0" : "1";
  }
};

let oxygenRating = null;
let scrubberRating = null;
let oxygenDataset = [...data];
let scrubberDataset = [...data];

for(let i = 0; i < 12; i++) {
  if (!oxygenRating) {
    const oxygenSearchBit = getTopBit(oxygenDataset, i, true);
    oxygenDataset = oxygenDataset.filter(dataEl => oxygenSearchBit == dataEl.charAt(i));  
  }
  if (!scrubberRating) {
    const scrubberSearchBit = getTopBit(scrubberDataset, i, false);
    scrubberDataset = scrubberDataset.filter(dataEl => scrubberSearchBit == dataEl.charAt(i));
  }
  if(oxygenDataset.length === 1 && !oxygenRating) {
    oxygenRating = oxygenDataset[0];
  }
  if(scrubberDataset.length === 1 && !scrubberRating) {
    scrubberRating = scrubberDataset[0];
  }
  if(oxygenRating && scrubberRating) {
    break;
  }
};

const oxygenDec = parseInt(oxygenRating, 2);
const scrubberDec = parseInt(scrubberRating, 2);

console.log(oxygenDec*scrubberDec);
