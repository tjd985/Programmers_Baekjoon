let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
input = input.map((value) => Number(value));

const target = input[0];
let zeroLength = 0;

for (let i = 1; i <= target; i++) {
  if (i % 5 === 0) {
    zeroLength++;
  }

  if (i % 25 === 0) {
    zeroLength++;
  }

  if (i % 125 === 0) {
    zeroLength++;
  }
}

console.log(zeroLength);