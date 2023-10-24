let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

input.shift();
input = Array.from(new Set(input));
input.sort();
input.sort((a, b) => a.length - b.length);

input.forEach((value) => {
  console.log(value);
});