let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

const result = [];
let maxCount = 0;
const upperString = input[0].toUpperCase();
const cache = {}

for (const word of upperString) {
  cache[word] = (cache[word] || 0) + 1;

  if (cache[word] > maxCount) {
    maxCount = cache[word];
  }
}

for (const word in cache) {
  if (cache[word] === maxCount) {
    result.push(word);
  }
}

if (result.length > 1) {
  console.log("?");
} else {
  console.log(result[0]);
}