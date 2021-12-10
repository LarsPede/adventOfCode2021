import data from '../../data/first.js';

let count = 0;
for(let i=3; i<data.length; i++) {
  const firstSlide = data[i-3]+data[i-2]+data[i-1];
  const secondSlide = data[i-2]+data[i-1]+data[i];
  if(firstSlide<secondSlide) {
    count++;
  }
}

console.log(count);
