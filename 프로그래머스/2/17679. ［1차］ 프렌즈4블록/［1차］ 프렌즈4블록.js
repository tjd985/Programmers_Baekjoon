function repositionBoard(board, crashBlock) {
  for (const value of crashBlock) {
    const [x, y] = value.split(",").map(Number);
    
    board[x][y] = null;
  }
  
  for (const value of crashBlock) {
    let [x, y] = value.split(",").map(Number);
    
    while (x) {
      const aboveBlock = board[x - 1][y];
      
      board[x - 1][y] = null;
      board[x][y] = aboveBlock;
      
      x -= 1;
    }
  }
  
  return board;
}

function recursion(m, n, board) {
  const moveX = [0, 1, 1];
  const moveY = [1, 0, 1];
  const crashBlock = new Set();

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const currentChar = board[i][j];
      
      if (currentChar === null) {
        continue;
      }

      for (let k = 0; k < 3; k++) {
        const nextX = i + moveX[k];
        const nextY = j + moveY[k];

        const attachedChar = board[nextX][nextY];

        if (attachedChar !== currentChar) {
          board[nextX][nextY] = attachedChar;

          break;
        }
        
        if (k === 2) {
          crashBlock.add(`${i},${j}`);
          crashBlock.add(`${i},${j + 1}`);
          crashBlock.add(`${i + 1},${j}`);
          crashBlock.add(`${i + 1},${j + 1}`);
        }
      }
    }
  }

  if (!crashBlock.size) {
    return 0;
  }
  
  
  
  return crashBlock.size + recursion(m, n, repositionBoard(board, crashBlock));
}

function solution(m, n, board) {
  board = board.map((row) => row.split(""));
  
  return recursion(m, n, board);
}