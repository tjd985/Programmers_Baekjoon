const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [dictionaryCount, testCount] = input.shift().split(" ").map(Number);
const dictionary = input.splice(0, dictionaryCount);
const testCase = input;
const dictionaryMap = new Map();
const result = [];

dictionary.forEach((value, index) => {
  dictionaryMap.set(value, index + 1);
});

testCase.forEach((test) => {
  if (isNaN(test)) {
    result.push(dictionaryMap.get(test));
  } else {
    result.push(dictionary[test - 1]);
  }
});

console.log(result.join("\n"));
