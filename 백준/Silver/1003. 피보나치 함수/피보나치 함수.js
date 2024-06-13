const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const dp = {
  0: [0, 1, 0],
  1: [1, 0, 1],
};

function calculateFibo(num) {
  if (dp[num] !== undefined) {
    return dp[num];
  }

  const twoBefore = calculateFibo(num - 2);
  const oneBefore = calculateFibo(num - 1);
  dp[num] = [
    twoBefore[0] + oneBefore[0],
    twoBefore[1] + oneBefore[1],
    twoBefore[2] + oneBefore[2],
  ];

  return dp[num];
}

for (let i = 1; i < input.length; i++) {
  const currentNum = input[i];

  calculateFibo(input[i]);

  console.log(dp[currentNum][1] + " " + dp[currentNum][2]);
}
