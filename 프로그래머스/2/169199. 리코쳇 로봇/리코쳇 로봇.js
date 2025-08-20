function findStartIndex(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        return [i, j, 0];
      }
    }
  }
}

function solution(board) {
  board = board.map((row) => row.split(""));
  
  const moveX = [-1, 1, 0, 0];
  const moveY = [0, 0, -1, 1];
  
  const history = new Set();
  const queue = [findStartIndex(board)];
  
  let result = -1;
  
  while (queue.length) {
    let [currentX, currentY, moveCount] = queue.shift();
    
    if (board[currentX][currentY] === 'G') {
      return moveCount;
    }
    
    history.add(`${currentX}${currentY}`);
    
    let i = 0;
    
    for (i = 0; i < 4; i++) {
      let nextX = currentX + moveX[i];
      let nextY = currentY + moveY[i];
      
      let outofBoard = false;
      let inBoard = false;
      
      while (true) {
        outofBoard =
              nextX < 0 ||
              nextX >= board.length ||
              nextY < 0 ||
              nextY >= board[0].length;
        
        if (outofBoard) {
          break;
        }
        
        inBoard = board[nextX][nextY] === 'D';
        
        if (inBoard) {
          break;
        }
        
        nextX += moveX[i];
        nextY += moveY[i];
      }
      
      if (history.has(`${nextX - moveX[i]}${nextY - moveY[i]}`)) {
        continue;
      }
      
      queue.push([nextX - moveX[i], nextY - moveY[i], moveCount + 1]);
    }
  }
  
  return result;
}