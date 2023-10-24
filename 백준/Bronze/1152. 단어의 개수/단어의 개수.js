let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

let count = 0;

for (const word of input) {
  if (!!word) {
    count++;
  }
}

console.log(count);