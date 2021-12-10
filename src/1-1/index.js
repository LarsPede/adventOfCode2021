import data from '../../data/first.js';

let count = 0;
for(let i=1; i<data.length; i++) {
  if(data[i-1]<data[i]) {
    count++;
  }
}

console.log(count);
