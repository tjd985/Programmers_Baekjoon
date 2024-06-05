const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [testCase, ...rest] = input;
const cases = [];
const result = [];

for (let i = 0; i < Number(testCase); i++) {
  cases.push(rest.splice(0, Number(rest[1]) + 2));
}

for (let i = 0; i < cases.length; i++) {
  const currentCase = cases[i];
  const [startAndEnd, planetCounts, ...planets] = currentCase;
  const [startX, startY, endX, endY] = startAndEnd.split(" ").map(Number);
  let count = 0;

  for (const planet of planets) {
    const [x, y, radius] = planet.split(" ").map(Number);

    if ((startX - x) ** 2 + (startY - y) ** 2 < radius ** 2) {
      count++;
    }

    if ((endX - x) ** 2 + (endY - y) ** 2 < radius ** 2) {
      count++;
    }

    if (
      (startX - x) ** 2 + (startY - y) ** 2 < radius ** 2 &&
      (endX - x) ** 2 + (endY - y) ** 2 < radius ** 2
    ) {
      count -= 2;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));