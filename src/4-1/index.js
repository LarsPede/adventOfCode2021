import {boards, draw} from '../../data/fourth.js';

let checkedBoards = [];
for(let i = 0; i<boards.length; i++) {
  checkedBoards[i] = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ];
};

let returnVal = null

const markBoards = (number) => {
  boards.forEach((board, boardIndex) => {
    board.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        if(val == number) {
          checkedBoards[boardIndex][rowIndex][colIndex] = true;
        };
      });
    });
  });
}
const checkWinner = () => {
  let winner = null; 
  for(let [boardIndex, board] of checkedBoards.entries()) {
    for(let row of board) {
      if (row.every(val => val === true)) {
        winner = boardIndex;
        break;
      }
    };
    if (
      board.every(row => row[0] === true) ||
      board.every(row => row[1] === true) ||
      board.every(row => row[2] === true) ||
      board.every(row => row[3] === true) ||
      board.every(row => row[4] === true) ||
      winner !== null
    ) {
      winner = boardIndex;
      break;
    }
  };
  return winner;
}
const calcWinner = (boardNum, drawnNum) => {
  let sum = 0;
  boards[boardNum].forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      if(!checkedBoards[boardNum][rowIndex][colIndex]) {
        sum += val;
      };
    });
  });
  return sum*drawnNum;
}

for(const num of draw) {
  markBoards(num);
  const winner = checkWinner();
  if (winner) {
    returnVal = calcWinner(winner, num);
    break;
  }
};
console.log(returnVal);
