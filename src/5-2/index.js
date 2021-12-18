import {lines} from '../../data/fifth.js';

const grid = [];

const allNumbers = lines.reduce((acc, line) => ({x: [...acc.x, line.first[0], line.second[0]], y: [...acc.y, line.first[1], line.second[1]]}),{x: [], y: []});

const maxNum = Math.max(Math.max(...allNumbers.x), Math.max(...allNumbers.y));

for (let i = 0; i <= maxNum; i++) {
  grid[i] = [];
  for (let j = 0; j <= maxNum; j++) {
    grid[i][j] = 0;
  }
}
lines.forEach(line => {
  const firstX = parseInt(line.first[0]);
  const firstY = parseInt(line.first[1]);
  const secondX = parseInt(line.second[0]);
  const secondY = parseInt(line.second[1]);

  let offset = 0;
  let xOffset = 0;
  let yOffset = 0;

  // vertical 1,1 -> 1,3
  if (firstX === secondX) { // 1 === 1
    if (firstY > secondY) { // 1 > 3
      offset = secondY;
    } else {
      offset = firstY; // 1
    }
    const ySpan = Math.abs(firstY-secondY); // abs(1-3) = 2
    for (let i=0; i<=ySpan; i++) {
        grid[firstX][offset+i]++; // grid[1][1+0,1+1,1+2]
    }
    
  // horizontal 2,3 -> 4,3
  } else if (firstY === secondY) { // 3 === 3
    if (firstX > secondX) { // 2 > 4
      offset = secondX;
    } else {
      offset = firstX; // 2
    }
    const xSpan = Math.abs(firstX-secondX); // abs(2-4) = 2
    for (let i=0; i<=xSpan; i++) {
      grid[offset+i][firstY]++; // grid[2+0,2+1,2+2][3]
    }
  // diagonal
  } else {
    // 1,2 -> 2,3
    if (firstX - secondX === firstY - secondY) { // -1 === -1
      xOffset = firstX > secondX ? secondX : firstX; // 1 > 2 = 1
      yOffset = firstY > secondY ? secondY : firstY; // 2 > 3 = 2
      
      const span = Math.abs(firstX-secondX); // abs(1-2) = 1
      
      for (let i=0; i<=span; i++) {
        grid[xOffset+i][yOffset+i]++; // grid[1+0,1+1][2+0,2+1]
      }
    // 6,10 -> 8,8
    } else {
      const span = Math.abs(firstX-secondX); // abs(8-6) = 2
      xOffset = firstX > secondX ? firstX : secondX; // 8
      yOffset = firstX > secondX ? firstY : secondY; // 8
      for (let i=0; i<=span; i++) {
        grid[xOffset-i][yOffset+i]++; // grid[8-0,8-1,8-2][8+0,8+1,8+2]
      }
    }
  }
})

let count = 0;

grid.forEach((row) => {
  row.forEach((val) => {
    if (val > 1) count++;
  });
});

console.log(count);
