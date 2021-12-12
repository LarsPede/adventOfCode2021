import {boards, draw} from '../../data/fourth.js';

let checkedBoards = [];
let winnerBoards = [];
for(let i = 0; i<boards.length; i++) {
  checkedBoards[i] = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ];
  winnerBoards[i] = false;
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
  for(let [boardIndex, board] of checkedBoards.entries()) {
    for(let row of board) {
      if (row.every(val => val === true)) {
        winnerBoards[boardIndex] = true;
      }
    };
    if (
      board.every(row => row[0] === true) ||
      board.every(row => row[1] === true) ||
      board.every(row => row[2] === true) ||
      board.every(row => row[3] === true) ||
      board.every(row => row[4] === true) ||
      winnerBoards[boardIndex]
    ) {
      winnerBoards[boardIndex] = true;
    }
  };
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
let lastWinnerBoard = null;
for(const num of draw) {
  markBoards(num);
  checkWinner();
  if (winnerBoards.filter(val => val === false).length === 1 && lastWinnerBoard === null) {
    lastWinnerBoard = winnerBoards.indexOf(false);
  }
  if (winnerBoards.filter(val => val === false).length === 0) {
    returnVal = calcWinner(lastWinnerBoard, num);
    break;
  }
};
console.log(returnVal);
