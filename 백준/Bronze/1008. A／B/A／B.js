let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(input[0], input[1]));