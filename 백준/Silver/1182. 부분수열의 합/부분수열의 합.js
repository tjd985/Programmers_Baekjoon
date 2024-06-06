const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [targetList, numbers] = input;
const [length, targetNumber] = targetList.split(" ").map(Number);
const numberList = numbers.split(" ").map(Number);
const isVisit = Array.from({ length: length }, (_) => false);
let result = 0;

function findSequence(currentNumberList, currentIndex) {
  const currentSum = currentNumberList.reduce((acc, num) => {
    return acc + num;
  }, 0);

  if (currentSum === targetNumber && currentNumberList.length) {
    result++;
  }

  for (let i = currentIndex; i < length; i++) {
    if (isVisit[i]) {
      continue;
    }

    isVisit[i] = true;
    findSequence([...currentNumberList, numberList[i]], i);
    isVisit[i] = false;
  }
}

findSequence([], 0);

console.log(result);
