import {puzzleInput} from '../../data/eleventh.js';

const octopussLines = puzzleInput.map((i) => i.split('').map(str => parseInt(str)));

let sparkles = 0;
let allFlash = 0;

for(let i = 0; i < Infinity; i++) {
  octopussLines.forEach((octopusses, ind) => {
    octopusses.forEach((_, idx) => {
      octopussLines[ind][idx]++;
    });
  });
  let run = true;
  while(run) {
    run = false;
    octopussLines.forEach((octopusses, lineIndex) => {
      octopusses.forEach((octopus, octoIndex) => {
        if (octopus > 9 && octopus < 1000) {
          octopussLines[lineIndex][octoIndex]+=1000;
          sparkles++;
          if (lineIndex !== 0 && octoIndex !== 0) {
            octopussLines[lineIndex-1][octoIndex-1]++;
            if (octopussLines[lineIndex-1][octoIndex-1] > 9 && octopussLines[lineIndex-1][octoIndex-1] < 1000) {
              run = true;
            }
          }
          if (lineIndex !== 0) {
            octopussLines[lineIndex-1][octoIndex]++;
            if (octopussLines[lineIndex-1][octoIndex] > 9 && octopussLines[lineIndex-1][octoIndex] < 1000) {
              run = true;
            }
          }
          if (lineIndex !== 0 && octoIndex !== octopusses.length-1) {
            octopussLines[lineIndex-1][octoIndex+1]++;
            if (octopussLines[lineIndex-1][octoIndex+1] > 9 && octopussLines[lineIndex-1][octoIndex+1] < 1000) {
              run = true;
            }
          }
          if (octoIndex !== 0) {
            octopussLines[lineIndex][octoIndex-1]++;
            if (octopussLines[lineIndex][octoIndex-1] > 9 && octopussLines[lineIndex][octoIndex-1] < 1000) {
              run = true;
            }
          }
          if (octoIndex !== octopusses.length-1) {
            octopussLines[lineIndex][octoIndex+1]++;
            if (octopussLines[lineIndex][octoIndex+1] > 9 && octopussLines[lineIndex][octoIndex+1] < 1000) {
              run = true;
            }
          }
          if (lineIndex !== octopussLines.length-1 && octoIndex !== 0) {
            octopussLines[lineIndex+1][octoIndex-1]++;
            if (octopussLines[lineIndex+1][octoIndex-1] > 9 && octopussLines[lineIndex+1][octoIndex-1] < 1000) {
              run = true;
            }
          }
          if (lineIndex !== octopussLines.length-1) {
            octopussLines[lineIndex+1][octoIndex]++;
            if (octopussLines[lineIndex+1][octoIndex] > 9 && octopussLines[lineIndex+1][octoIndex] < 1000) {
              run = true;
            }
          }
          if (lineIndex !== octopussLines.length-1 && octoIndex !== octopusses.length-1) {
            octopussLines[lineIndex+1][octoIndex+1]++;
            if (octopussLines[lineIndex+1][octoIndex+1] > 9 && octopussLines[lineIndex+1][octoIndex+1] < 1000) {
              run = true;
            }
          }
        }
      });
    });
  }
  if (octopussLines.every(octopusses => octopusses.every(octopus => octopus > 9))) {
    allFlash = i+1;
    break;
  };
  octopussLines.forEach((octopusses, ind) => {
    octopusses.forEach((_, idx) => {
      if (octopussLines[ind][idx] > 9) {
        octopussLines[ind][idx] = 0;
      }
    });
  });
}
console.log(sparkles);
console.log(allFlash);