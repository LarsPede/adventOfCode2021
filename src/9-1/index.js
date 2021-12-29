import {puzzleInput} from '../../data/nine.js';

const heightMap = puzzleInput.map(input => input.split('').map(val => parseInt(val, 10)));

const lowPoints = Array(10).fill(0);

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
      lowPoints[point]++;
    }
  })
});

const sumRiskScore = lowPoints.reduce((sum, numOfPoints, index) => sum += numOfPoints*index+numOfPoints, 0);

console.log('result ', sumRiskScore);
