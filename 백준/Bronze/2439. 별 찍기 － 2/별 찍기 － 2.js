let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

const num = input[0];

for (let i = 1; i <= num; i++) {
  console.log(" ".repeat(num - i) + "*".repeat(i));
}