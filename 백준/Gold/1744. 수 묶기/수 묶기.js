let fs = require('fs');
const { start } = require('repl');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [_, ...numArray] = input;
let maxNum = 0;
const minusArray = [];
const plusArray = [];

for (const num of numArray) {
  if (+num <= 0) {
    minusArray.push(+num);

    continue;
  }

  plusArray.push(+num);
}

minusArray.sort((a, b) => b - a);
plusArray.sort((a, b) => a - b);

while (minusArray.length > 0 || plusArray.length > 0) {
  if (minusArray.length > 1) {
    maxNum += minusArray.pop() * minusArray.pop();
  }

  if (plusArray.length > 1) {
    const num1 = plusArray.pop();
    const num2 = plusArray.pop();

    if (num1 === 1 || num2 === 1) {
      maxNum += num1 + num2;
    } else {
      maxNum += num1 * num2;
    }
  }

  if (minusArray.length === 1) {
    maxNum += minusArray.pop();
  }

  if (plusArray.length === 1) {
    maxNum += plusArray.pop();
  }
}

console.log(maxNum);