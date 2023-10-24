let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

const maxNum = Math.max(...input);
const maxNumIndex = input.findIndex((value) => value === maxNum);

console.log(`${maxNum}\n${maxNumIndex + 1}`);