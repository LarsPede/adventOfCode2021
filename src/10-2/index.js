import {puzzleInput} from '../../data/tenth.js';

const subsystem = puzzleInput.map((i) => i.split(''));

const openLines = [];
subsystem.forEach((line) => {
  let corruptedLine = false;
  const openElements =  [];

  for(const el of line) {
    let corruptedElement = false;
    switch(el) {
      case "{":
      case "[":
      case "<":
      case "(":
        openElements.push(el);
        break;
      case "]":
        if(openElements[openElements.length-1] === "[") {
          openElements.pop();
        } else {
          corruptedElement = true;
        }
        break;
      case "}":
        if(openElements[openElements.length-1] === "{") {
          openElements.pop();
        } else {
          corruptedElement = true;
        }
        break;
      case ">":
        if(openElements[openElements.length-1] === "<") {
          openElements.pop();
        } else {
          corruptedElement = true;
        }
        break;
      case ")":
        if(openElements[openElements.length-1] === "(") {
          openElements.pop();
        } else {
          corruptedElement = true;
        }
        break;
      default:
        break;
    }
    if (corruptedElement) {
      break;
    }
  };
  if (!corruptedLine) {
    openLines.push(openElements)
  }
});
const totals = [];
openLines.forEach(line => {
  let totalForLine = 0;
  line.reverse().forEach(el => {
    totalForLine = totalForLine*5;
    switch(el) {
      case "(":
        totalForLine += 1;
        break;
      case "[":
        totalForLine += 2;
        break;
      case "{":
        totalForLine += 3;
        break;
      case "<":
        totalForLine += 4;
        break;
      default:
        break;
    }
  });
  totals.push(totalForLine);
});
console.log('before ', totals);
totals.sort((a, b) => parseInt(a) - parseInt(b))
console.log(totals[Math.floor(totals.length/2)]);