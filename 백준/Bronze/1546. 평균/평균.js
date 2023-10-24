let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let sum = 0;
const score = input[1].split(" ").map((value) => +value);
const maxNum = Math.max(...score);
score.forEach((value) => {
  sum += value / maxNum * 100;
});

console.log(sum / +input[0]);