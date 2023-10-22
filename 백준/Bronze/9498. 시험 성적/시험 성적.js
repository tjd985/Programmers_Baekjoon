let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

if (input[0] >= 90) {
  return console.log("A");
}

if (input[0] >= 80) {
  return console.log("B");
}

if (input[0] >= 70) {
  return console.log("C");
}

if (input[0] >= 60) {
  return console.log("D");
}

console.log("F");