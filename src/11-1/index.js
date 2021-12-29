import {puzzleInput} from '../../data/eleventh.js';

const octopussLines = puzzleInput.map((i) => i.split(''));

let sparkles = 0;

const rounds = 1;

for(let i = 0; i < rounds; i++) {
  octopussLines.forEach((octopusses, lineIndex) => {
    octopusses.forEach((octopus, octoIndex) => {
      if (octopus > 9) {
        sparkles++;
        if ()

      }
    })
  })
}

console.log();