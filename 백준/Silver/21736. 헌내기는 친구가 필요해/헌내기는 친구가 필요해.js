let fs = require('fs');
const { start } = require('repl');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const firstInput = input.splice(0, 1)[0].split(" ").map((Number));
const [row, column] = firstInput;
const isVisit = Array.from({ length: row }, () => {
  return new Array(column).fill(false);
});
const queue = [];
const moveX = [-1, 0, 1, 0];
const moveY = [0, -1, 0, 1];
let flag = false;
let meetPeopleCount = 0;

for (let i = 0; i < row; i++) {
  if (flag) {
    break;
  }

  for (let j = 0; j < column; j++) {
    if (input[i][j] === "I") {
      startX = i;
      startY = j;
      flag = true;

      queue.push([i, j]);
    }
  }
}

while (queue.length) {
  const [currentX, currentY] = queue.pop();

  if (input[currentX][currentY] === "P" && !isVisit[currentX][currentY]) {
    meetPeopleCount++;
  }

  isVisit[currentX][currentY] = true;
  
  for (let i = 0; i < 4; i++) {
    const nextX = currentX + moveX[i];
    const nextY = currentY + moveY[i];

    if (nextX < 0 || nextX > row - 1 || nextY < 0 || nextY > column - 1) {
      continue;
    }

    if (!isVisit[nextX][nextY] && input[nextX][nextY] !== "X") {
      queue.push([nextX, nextY]);
    }
  }
}

meetPeopleCount === 0 ? console.log("TT") : console.log(meetPeopleCount);