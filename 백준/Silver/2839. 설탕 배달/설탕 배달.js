let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
input = input.map((value) => Number(value));

let targetNumber = input[0];
let count = 0;

while (targetNumber > 0) {
  if (targetNumber % 5 === 0) {
    targetNumber -= 5;
  } else {
    targetNumber -= 3;
  }

  count++;
}

console.log(targetNumber === 0 ? count : -1);