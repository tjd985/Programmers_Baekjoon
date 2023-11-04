let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let longString = input[0];
let shortString = input[1];
let maxLength = 0;
let currentString = "";

if (input[1].length > input[0].length) {
  longString = input[1];
  shortString = input[0];
}

for (let i = 0; i < shortString.length; i++) {
  currentString += shortString[i];

  if (longString.includes(currentString)) {
    if (i === shortString.length - 1) {
      if (currentString.length > maxLength) {
        maxLength = currentString.length;
      }
    }
    continue;
  }


  if (currentString.length - 1 > maxLength) {
    maxLength = currentString.length - 1;
  }

  if (currentString.length < 2) {
    currentString = "";
    
    continue;
  }

  currentString = currentString.slice(1, currentString.length - 1);
  i = i - 1;
}

console.log(maxLength);