function solution(rows, columns, queries) {
  const board = new Array(rows).fill(0).map((value, index) => {
    const rowList = [];
    
    for (let i = 1; i <= columns; i++) {
      rowList.push(index * columns + i);
    }
    
    return rowList;
  });
  
  const result = [];
  
  queries.forEach((query) => {
    const [startX, startY, endX, endY] = query;
    let minimumValue = board[startX - 1][startY - 1];
    
    function rotate(
      currentX,
      currentY,
      changedValue,
      direction,
    ) {
      const currentValue = board[currentX][currentY];
      
      minimumValue = Math.min(minimumValue, currentValue);
      
      board[currentX][currentY] = changedValue;
      
      if (direction === 'R') {
        if (currentY === endY - 1) {
          return rotate(currentX + 1, currentY, currentValue, 'D');
        }
        
        return rotate(currentX, currentY + 1, currentValue, 'R');
      }
      
      if (direction === 'D') {
        if (currentX === endX - 1) {
          return rotate(currentX, currentY - 1, currentValue, 'L');
        }
        
        return rotate(currentX + 1, currentY, currentValue, 'D');
      }
      
      if (direction === 'L') {
        if (currentY === startY - 1) {
          return rotate(currentX - 1, currentY, currentValue, 'U');
        }
        
        return rotate(currentX, currentY - 1, currentValue, 'L');
      }
      
      if (direction === 'U') {
        if (currentX === startX - 1) {
          result.push(minimumValue);
          
          return;
        }
        
        return rotate(currentX - 1, currentY, currentValue, 'U');
      }
    }
    
    rotate(startX - 1, startY - 1, board[startX - 1][startY - 1], 'R');
  });
  
  return result;
}