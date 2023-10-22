let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

const cache = {};
const maxNumber = Math.max(...input);

for (let i = 0; i < input.length; i++) {
  const diceNumber = input[i];

  cache[diceNumber] = (cache[diceNumber] || 0) + 1;
}

for (const diceNumber in cache) {
  if (cache[diceNumber] === 2) {
    return console.log(1000 + Number(diceNumber) * 100);
  }

  if (cache[diceNumber] === 3) {
    return console.log(10000 + Number(diceNumber) * 1000);
  }
}

console.log(maxNumber * 100);