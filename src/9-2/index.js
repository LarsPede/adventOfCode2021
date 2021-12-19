import {puzzleInput} from '../../data/nine.js';

const heightMap = puzzleInput.map(input => input.split('').map(val => parseInt(val, 10)));

const rowMax = heightMap.length-1;
const colMax = heightMap[0].length-1;

const lowPoints = [];

heightMap.forEach((heights, rowIndex) => {
  heights.forEach((point, pointIndex) => {
    const up = heightMap[rowIndex-1]
      ? (
          heightMap[rowIndex-1][pointIndex] === undefined 
            ? Number.POSITIVE_INFINITY 
            : heightMap[rowIndex-1][pointIndex]
        ) 
      : Number.POSITIVE_INFINITY;
    const down =  heightMap[rowIndex+1]
    ? (
        heightMap[rowIndex+1][pointIndex] === undefined 
          ? Number.POSITIVE_INFINITY 
          : heightMap[rowIndex+1][pointIndex]
      ) 
    : Number.POSITIVE_INFINITY;
    const left = heightMap[rowIndex][pointIndex-1] === undefined 
      ? Number.POSITIVE_INFINITY 
      : heightMap[rowIndex][pointIndex-1];
    const right = heightMap[rowIndex][pointIndex+1] === undefined 
    ? Number.POSITIVE_INFINITY 
    : heightMap[rowIndex][pointIndex+1];
    if (
      point < up &&
      point < down &&
      point < left &&
      point < right
    ) {
      lowPoints.push({row: rowIndex, col: pointIndex});
    }
  })
});

const checkAndAddNeighbours = (points, alreadyCheckedNodes) => {
  points.forEach(point => {
  })
}

lowPoints.forEach(point => {
  const checkedNodes = [];
  const nodesToCheck = [point];
  const amount = checkAndAddNeighbours(nodesToCheck, checkedNodes);

});

console.log('result ', lowPoints);
