let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

const cache = {};
const multipleValue = input.reduce((accumulate, current) => {
  return accumulate * current;
}, 1);

for (const num of String(multipleValue)) {
  cache[num] = (cache[num] || 0) + 1;
}

for (let i = 0; i < 10; i++) {
  if (cache[i]) {
    console.log(cache[i]);
  } else {
    console.log(0);
  }
}