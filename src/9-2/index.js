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
  const sum = 0;
  points.forEach(point => {
    console.log(point);
    alreadyCheckedNodes.push(`${point.row}-${point.col}`);
    const newPoints = [];
    //up
    if (point.row !== 0) {
      if (!alreadyCheckedNodes.includes(x => x === `${point.row-1}-${point.col}`) && heightMap[point.row-1][point.col] !== 9) {
        newPoints.push({row: point.row-1, col: point.col});
      }
    }
    //left
    if (point.col !== 0) {
      if (!alreadyCheckedNodes.includes(x => x === `${point.row}-${point.col-1}`) && heightMap[point.row][point.col-1] !== 9) {
        newPoints.push({row: point.row, col: point.col-1});
      }
    }
    //down
    if (point.row !== rowMax) {
      if (!alreadyCheckedNodes.includes(x => x === `${point.row+1}-${point.col}`) && heightMap[point.row+1][point.col] !== 9) {
        newPoints.push({row: point.row+1, col: point.col});
      }
    }//right
    if (point.col !== colMax) {
      if (!alreadyCheckedNodes.includes(x => x === `${point.row}-${point.col+1}`) && heightMap[point.row][point.col+1] !== 9) {
        newPoints.push({row: point.row, col: point.col+1});
      }
    }
    if (newPoints.length) {
      sum+=1+checkAndAddNeighbours(newPoints, alreadyCheckedNodes);
    } else {
      sum++;
    }
  })
  return sum;
}

lowPoints.forEach(point => {
  const checkedNodes = [];
  const nodesToCheck = [point];
  const amount = checkAndAddNeighbours(nodesToCheck, checkedNodes);
  console.log(amount)
});

//console.log('result ', lowPoints);
