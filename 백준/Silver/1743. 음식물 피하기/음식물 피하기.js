const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [height, width, trashCount] = inputs[0].split(" ").map(Number);

const isVisit = new Array(height)
  .fill(null)
  .map((value) => new Array(width).fill(true));

for (let i = 1; i < inputs.length; i++) {
  const [trashX, trashY] = inputs[i].split(" ").map((value) => value - 1);

  isVisit[trashX][trashY] = false;
}

const moveX = [-1, 0, 1, 0];
const moveY = [0, -1, 0, 1];

let answer = 0;

for (let x = 0; x < height; x++) {
  for (let y = 0; y < width; y++) {
    if (isVisit[x][y]) {
      continue;
    }

    const stack = [[x, y]];
    let trashSize = 0;

    while (stack.length) {
      const [x, y] = stack.pop();

      isVisit[x][y] = true;
      trashSize++;

      for (let i = 0; i < 4; i++) {
        const nextX = x + moveX[i];
        const nextY = y + moveY[i];

        const isOutRange =
          nextX < 0 || nextX > height - 1 || nextY < 0 || nextY > width - 1;

        if (isOutRange || isVisit[nextX][nextY]) {
          continue;
        }

        isVisit[nextX][nextY] = true;
        stack.push([nextX, nextY]);
      }
    }

    answer = Math.max(answer, trashSize);
  }
}

console.log(answer);
