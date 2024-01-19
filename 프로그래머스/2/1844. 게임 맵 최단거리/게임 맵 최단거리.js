function solution(maps) {
  const width = maps.length;
  const height = maps[0].length;
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  const queue = [[0, 0]];
  
  maps[0][0] = 2;
  
  while(queue.length) {
    const [currentX, currentY] = queue.shift();
    
    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];
      
      if (
        nextX < 0 ||
        nextX >= width ||
        nextY < 0 ||
        nextY >= height ||
        maps[nextX][nextY] !== 1
      ) {
        continue;
      }
      
      maps[nextX][nextY] = maps[currentX][currentY] + 1;
      queue.push([nextX, nextY]);
    }
  }
  
  return maps[width - 1][height - 1] === 1 ? -1 : maps[width - 1][height - 1] - 1;
}