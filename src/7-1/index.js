import {startingPositions} from '../../data/seventh.js';

const maxPosition = Math.max(...startingPositions);
let fuelPositions = Array(maxPosition).fill();
fuelPositions = fuelPositions.map((_, index) => {
  let position = 0;
  startingPositions.forEach(startingPosition => {
    position += Math.abs(index-startingPosition);
  })
  return position;
})

console.log('result ', Math.min(...fuelPositions));
