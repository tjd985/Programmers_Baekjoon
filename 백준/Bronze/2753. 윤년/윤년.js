let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

const isMultiple_4 = input[0] % 4 === 0;
const isMultiple_100 = input[0] % 100 === 0;
const isMultiple_400 = input[0] % 400 === 0;

if ((isMultiple_4 && !isMultiple_100) || isMultiple_400) {
  return console.log(1);
}

console.log(0);