let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
input = input.map((value) => Number(value));

const [length, ...numArray] = input;

numArray.sort((a, b) => a - b);

console.log(numArray.join("\n"));