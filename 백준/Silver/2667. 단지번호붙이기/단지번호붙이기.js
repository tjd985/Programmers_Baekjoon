let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [length, ...table] = input;
const customTable = table.map((row) => row.split("").map(Number));

function solution() {
  const result = [];

  for (let x = 0; x < Number(length); x++) {
    for (let y = 0; y < Number(length); y++) {
      if (customTable[x][y]) {
        result.push(findGroup([x, y]));
      }
    }
  }

  return [result.length, ...result.sort((a, b) => a - b)].join("\n");

  function findGroup(startPosition) {
    const stack = [startPosition];
    const moveX = [-1, 0, 1, 0];
    const moveY = [0, -1, 0, 1];
    let count = 0;

    while (stack.length) {
      const [currentX, currentY] = stack.pop();
      customTable[currentX][currentY] = 0;
      count++;

      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];

        const canGo =
          nextX >= 0 &&
          nextX < Number(length) &&
          nextY >= 0 &&
          nextY < Number(length) &&
          customTable[nextX][nextY] === 1;

        if (!canGo) {
          continue;
        }

        customTable[nextX][nextY] = 0;
        stack.push([nextX, nextY]);
      }
    }

    return count;
  }
}

console.log(solution());
