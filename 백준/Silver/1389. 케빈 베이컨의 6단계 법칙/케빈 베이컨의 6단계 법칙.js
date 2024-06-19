const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [info, ...relations] = input;
const [peopleCount, _] = info.split(" ").map(Number);

const INF = Infinity;
const relationTable = Array.from(
  { length: peopleCount + 1 },
  () => Array(peopleCount + 1).fill(INF)
);

for (let i = 1; i <= peopleCount; i++) {
  relationTable[i][i] = 0;
}

for (let i = 0; i < relations.length; i++) {
  const [from, to] = relations[i].split(" ").map(Number);
  relationTable[from][to] = 1;
  relationTable[to][from] = 1;
}

for (let k = 1; k <= peopleCount; k++) {
  for (let i = 1; i <= peopleCount; i++) {
    for (let j = 1; j <= peopleCount; j++) {
      if (relationTable[i][j] > relationTable[i][k] + relationTable[k][j]) {
        relationTable[i][j] = relationTable[i][k] + relationTable[k][j];
      }
    }
  }
}

const result = [];

for (let i = 1; i <= peopleCount; i++) {
  let sum = 0;
  for (let j = 1; j <= peopleCount; j++) {
    sum += relationTable[i][j];
  }
  result.push(sum);
}

const min = Math.min(...result);

console.log(result.findIndex((value) => value === min) + 1);