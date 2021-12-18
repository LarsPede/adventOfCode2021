import {startingPositions} from '../../data/seventh.js';

const maxPosition = Math.max(...startingPositions);
let fuelPositions = Array(maxPosition).fill();
fuelPositions = fuelPositions.map((_, index) => {
  let position = 0;
  startingPositions.forEach(startingPosition => {
    const traversel = Math.abs(index-startingPosition);
    position += (traversel*(traversel+1)/2);
  })
  return position;
})

console.log('result ', Math.min(...fuelPositions));
