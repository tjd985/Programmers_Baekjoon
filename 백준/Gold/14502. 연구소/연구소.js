let fs = require('fs');
const { start } = require('repl');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
const [_, ...field] = input;
const originalField = field.map((row) => row.split(" ").map(Number));
let maxNum = 0;

function BFS(field) {
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  const queue = [];
  let count = 0;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const currentNode = queue.shift();
    const [x, y] = currentNode;

    for (let i = 0; i < 4; i++) {
      const newX = x + moveX[i];
      const newY = y + moveY[i];
      const canMove = !(
        newX < 0
        || newX > field.length - 1
        || newY < 0
        || newY > field[0].length - 1
        || field[newX][newY] !== 0
      );

      if (canMove) {
        field[newX][newY] = 2;
        queue.push([newX, newY]);
      }
    }
  }

  field.forEach((row) => {
    row.forEach((value) => {
      if (value === 0) {
        count++;
      }
    });
  });

  return count;
}

function DFS(count) {
  if (count === 3) {
    const copiedField = originalField.map((row) => [...row]);
    const result = BFS(copiedField);

    maxNum = result > maxNum ? result : maxNum;

    return;
  }

  for (let x = 0; x < originalField.length; x++) {
    for (let y = 0; y < originalField[x].length; y++) {
      if (originalField[x][y] === 0) {
        originalField[x][y] = 1;

        DFS(count + 1);

        originalField[x][y] = 0;
      }
    }
  }
}

DFS(0);

console.log(maxNum);