function solution(board) {
  let result = 0;
  
  if (board.length === 1 && board[0].length === 1) {
    return board[0][0];
  }
  
  const moveList = [[-1 ,0], [0, -1], [-1, -1]];
  
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (!board[i][j]) {
        continue;
      }
      
      const minimumSquare = Math.min(
        board[i - 1][j - 1],
        board[i][j - 1],
        board[i - 1][j]
      );
            
      board[i][j] = minimumSquare + 1;
      
      result = Math.max(result, board[i][j]);
    }
  }
  
  return result * result;
}