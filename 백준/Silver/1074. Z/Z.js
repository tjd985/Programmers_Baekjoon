const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

const [N, targetRow, targetColumn] = input;
const length = 2 ** N;

let res = 0;
const divide = (row, column, length) => {
  if (row === targetRow && column === targetColumn) {
    console.log(res);

    return;
  }
  if (
    targetRow >= row &&
    targetRow < row + length &&
    targetColumn >= column &&
    targetColumn < column + length
  ) {
    length = Number(length / 2);

    divide(row, column, length);
    divide(row, column + length, length);
    divide(row + length, column, length);
    divide(row + length, column + length, length);
  } else {
    res += length ** 2;
  }
};

divide(0, 0, length);
