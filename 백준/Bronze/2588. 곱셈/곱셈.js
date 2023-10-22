let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync(filePath).toString().trim().split(" ");

function multiply(num1, num2) {
  for (let i = num2.length - 1; i >= 0; i--) {
    console.log(Number(num1) * Number(num2[i]));
  }

  console.log(Number(num1) * Number(num2));
}

multiply(input[0], input[1]);