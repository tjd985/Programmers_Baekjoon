let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
input = input.map((value) => Number(value));

function returnPow(number) {
  powResult = 1;

  while (true) {
    if (powResult * 2 > number) {
      return powResult;
    }

    powResult *= 2;
  }
}

const closestPow = returnPow(input);
const minus = input - closestPow;

if (minus === 0) {
  console.log(closestPow);

  return;
}

console.log(minus * 2);