let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

let start = input[0].split(" ");
let needMinute = input[1];
start = start.map((value) => Number(value));
needMinute = Number(needMinute);

let [hour, minute] = [...start];
let sumMinute = minute + needMinute;

if (sumMinute >= 60) {
  while (sumMinute >= 60) {
    hour += 1;
    sumMinute -= 60;
    
    if (hour === 24) {
      hour = 0;
    }
  }
}

console.log(hour, sumMinute);