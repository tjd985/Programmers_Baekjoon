let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
input = input.map((value) => Number(value));

const total = input[0];
let targetIndex = 0;
const stringArray = [];
let result = "";

for (let i = 1; i <= total; i++) {
  stringArray.push(i);
}

while (stringArray.length !== 0) {
  const length = stringArray.length;

  targetIndex += input[1] - 1;

  if (targetIndex >= length) {
    while (targetIndex >= length) {
      targetIndex -= length;
    }
  }

  result += `${stringArray.splice(targetIndex, 1)}, `;
}

console.log(`<${result.slice(0, result.length - 2)}>`);