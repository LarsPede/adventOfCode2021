import {puzzleInput} from '../../data/tenth.js';

const subsystem = puzzleInput.map((i) => i.split(''));

const total = [];
subsystem.forEach((line) => {
  const takenElements =  [];

  for(const el of line) {
    let a = false;
    switch(el) {
      case "{":
      case "[":
      case "<":
      case "(":
        takenElements.push(el);
        break;
      case "]":
        if(takenElements[takenElements.length-1] === "[") {
          takenElements.pop();
        } else {
          total.push(el);
          a = true;
        }
        break;
      case "}":
        if(takenElements[takenElements.length-1] === "{") {
          takenElements.pop();
        } else {
          total.push(el);
          a = true;
        }
        break;
      case ">":
        if(takenElements[takenElements.length-1] === "<") {
          takenElements.pop();
        } else {
          total.push(el);
          a = true;
        }
        break;
      case ")":
        if(takenElements[takenElements.length-1] === "(") {
          takenElements.pop();
        } else {
          total.push(el);
          a = true;
        }
        break;
      default:
        console.log('hit first default');
        break;
    }
    if (a) {
      break;
    }
  };
})
console.log('before ', total);

console.log(total.reduce((sum, brace) => {
  switch(brace) {
    case ")":
      return sum+3;
    case "]":
      return sum+57;
    case "}":
      return sum+1197;
    case ">":
      return sum+25137;
    default:
      console.log('hit second default');
      break;
  }
}, 0));