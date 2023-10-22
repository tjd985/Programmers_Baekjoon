let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

input[0] >= input[1] ? (input[0] === input[1] ? console.log("==") : console.log(">")) : console.log("<");