const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];

for (let i = 1; i < inputs.length; i++) {
  const [start, end] = inputs[i].split(" ").map(Number);
  let count = 0;

  for (let j = start; j <= end; j++) {
    const value = String(j);

    for (const str of value) {
      if (str === "0") {
        count++;
      }
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
