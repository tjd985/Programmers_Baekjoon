function solution() {
  const firstInput = input.splice(0, 1)[0].split(" ");
  const [row, column] = [+firstInput[0], +firstInput[1]];
  const isVisit = Array.from({ length: row }, (value) => {
    return value = new Array(column).fill(false);
  });
  let startX = 0;
  let startY = 0;
  let flag = false;

  for (let i = 0; i < row; i++) {
    if (flag) {
      break;
    }

    for (let j = 0; j < column; j++) {
      if (input[i][j] === "I") {
        startX = i;
        startY = j;
        flag = true;
      }
    }
  }

  const queue = [[startX, startY]];
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  let meetPeopleCount = 0;

  while (queue.length) {
    const [currentX, currentY] = queue.pop();
    const canCount = input[currentX][currentY] === "P" && !isVisit[currentX][currentY];

    if (canCount) {
      meetPeopleCount++;
    }

    isVisit[currentX][currentY] = true;
    
    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const isOutOfRange = nextX < 0 || nextX > row - 1 || nextY < 0 || nextY > column - 1;

      if (isOutOfRange) {
        continue;
      }

      const isOkay = !isVisit[nextX][nextY] && input[nextX][nextY] !== "X";

      if (isOkay) {
        queue.push([nextX, nextY]);
      }
    }
  }

  meetPeopleCount === 0 ? console.log("TT") : console.log(meetPeopleCount);
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    solution();
    process.exit();
});