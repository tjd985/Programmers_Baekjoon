let fs = require('fs');
const { start } = require('repl');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

const groups = +input.splice(0, 1)[0];
const results = [];

for (let i = 0; i < groups; i++) {
  let [peopleNumber, ...score] = input.splice(0, +input[0] + 1);
  let count = 1;

  score = score.map((value) => value.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
  let scope = score[0][1];

  for (let i = 1; i < +peopleNumber; i++) {
    if (score[i][1] < scope) {
      scope = score[i][1];
      count++;
    }
  }

  results.push(count);
}

console.log(results.join("\n"));