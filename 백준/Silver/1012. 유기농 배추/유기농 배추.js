const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [testCase, ...rest] = input;

for (let i = 0; i < Number(testCase); i++) {
  let result = 0;
  const [width, height, baechuCount] = rest[0].split(" ").map(Number);
  const [_, ...baechus] = rest.splice(0, baechuCount + 1);

  const farm = Array.from({ length: width }, (value) => {
    return Array.from({ length: height }, (value) => 0);
  });

  for (const baechu of baechus) {
    const [x, y] = baechu.split(" ").map(Number);

    farm[x][y] = 1;
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (!farm[i][j]) {
        continue;
      }

      result++;
      DFS(farm, i, j, width, height);
    }
  }

  console.log(result);
}

function DFS(farm, startX, startY, width, height) {
  const stack = [[startX, startY]];
  const moveX = [0, -1, 0, 1];
  const moveY = [-1, 0, 1, 0];

  while (stack.length) {
    const [currentX, currentY] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const isCantMove =
        nextX < 0 ||
        nextX >= width ||
        nextY < 0 ||
        nextY >= height ||
        farm[nextX][nextY] === 0;

      if (isCantMove) {
        continue;
      }

      farm[nextX][nextY] = 0;
      stack.push([nextX, nextY]);
    }
  }
}
