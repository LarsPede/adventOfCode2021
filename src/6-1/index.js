import {fish} from '../../data/sixth.js';

const calcFishTimersAfterOneDay = (currentFishTimer) => {
  const newFish = [];
  currentFishTimer = currentFishTimer.map(fish => {
    if (fish > 0) {
      return fish-1;
    } else {
      newFish.push(8);
      return 6;
    }
  });
  return currentFishTimer.concat(newFish);
}

const calcFishTimersAfterNDays = (n) => {
  let fishTimer = fish;
  for(let i = 0; i < n; i++) {
    fishTimer = calcFishTimersAfterOneDay(fishTimer);
  }
  return fishTimer;
}
const endResult = calcFishTimersAfterNDays(80);
console.log('result ', endResult.length);
