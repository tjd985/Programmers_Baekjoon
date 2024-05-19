function solution(land) {
  const width = land[0].length;
  const height = land.length;
  const result = new Array(land[0].length).fill(0);
  
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (!land[j][i]) {
        continue;
      }
      
      DFS([j, i], land);
    }
  }
  
  function DFS([x, y], coppiedLand) {
    const stack = [[x, y]];
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];
    const widthArea = new Set();
    let currentValue = 0;
    
    while (stack.length) {
      const [currentX, currentY] = stack.pop();
        
      widthArea.add(currentY);
      land[currentX][currentY] = 0;
      currentValue++;
      
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];
        const invalidMove = nextX < 0 || 
              nextX >= height ||
              nextY < 0 || 
              nextY >= width ||
              land[nextX][nextY] !== 1;
        
        if (invalidMove) {
          continue;
        }
        
        stack.push([nextX, nextY]);
        land[nextX][nextY] = 0;
      }
    }
    
    for (const index of widthArea) {
      result[index] = (result[index] || 0) + currentValue;
    }
  }
  
  return Math.max(...result);
}