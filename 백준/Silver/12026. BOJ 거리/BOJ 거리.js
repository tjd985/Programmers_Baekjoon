const { log } = require("console");
const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const length = Number(inputs[0]);
const blocks = inputs[1];
const dp = new Array(length).fill(Infinity);

dp[0] = 0;

const strMap = {
  O: "B",
  J: "O",
  B: "J",
};

for (let i = 1; i < length; i++) {
  const currentStr = blocks[i];

  for (let j = 0; j < i; j++) {
    const beforeStr = blocks[j];

    if (beforeStr !== strMap[currentStr]) {
      continue;
    }

    dp[i] = Math.min(dp[i], dp[j] + Math.pow(i - j, 2));
  }
}

console.log(dp[length - 1] === Infinity ? -1 : dp[length - 1]);
