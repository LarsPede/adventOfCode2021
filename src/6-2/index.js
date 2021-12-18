import {fish} from '../../data/sixth.js';

const fishGrowOverview = (days) => {
  const fishOnEachDay = Array(9).fill().map(
    (_, index) => fish.filter(f => f === index).length
  );
  Array(days).fill().forEach((_, idx) => {
    const newFish = fishOnEachDay.shift();
    fishOnEachDay.push(newFish);
    fishOnEachDay[6] += newFish;
  });
  return fishOnEachDay;
}

const endResult = fishGrowOverview(256);
console.log('result ', endResult.reduce((sum, res) => res+sum, 0));
