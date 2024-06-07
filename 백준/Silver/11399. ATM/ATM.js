const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const [peopleLength, people] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const result = [];

const sortedPeople = people
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

sortedPeople.reduce((acc, cur, index) => {
  acc += cur;
  result[index] = acc;

  return acc;
}, 0);

console.log(result.reduce((acc, cur) => acc + cur));
