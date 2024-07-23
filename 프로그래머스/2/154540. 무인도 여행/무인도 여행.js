function solution(maps) {
  const width = maps.length;
  const height = maps[0].length;
  const isVisit = Array.from({length: width}, (_) => new Array(height).fill(false));
  const result = [];
  
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (maps[i][j] === "X" || isVisit[i][j]) {
        continue;
      }
      
      result.push(findConnectedIsland([i, j]));
    }
  }
  
  return result.length ? result.sort((a, b) => a - b) : [-1];
  
  // 인자로 받은 섬 기준으로 연결된 섬을 모두 모두 찾을겁니다!
  function findConnectedIsland(start) {
    const stack = [start]; // [[0, 1]], length: 1
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];
    let sum = 0;
    
    while (stack.length) {
      const [currentX, currentY] = stack.pop();
      
      if (isVisit[currentX][currentY]) {
        continue;
      }
      
      isVisit[currentX][currentY] = true;
      sum += Number(maps[currentX][currentY]);
      
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];
        
        if (nextX < 0 ||
            nextX >= width ||
            nextY < 0 ||
            nextY >= height ||
            maps[nextX][nextY] === "X" ||
            isVisit[nextX][nextY] === true
           ) {
          continue;
        }
        
        stack.push([nextX, nextY]);
      }
    }
    
    return sum;
  }
}