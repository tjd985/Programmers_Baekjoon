function getStartIndex(mapList) {
  for (let i = 0; i < mapList.length; i++) {
    for (let j = 0; j < mapList[i].length; j++) {
      if (mapList[i][j] === 'S') {
        return [i, j];
      }
    }
  }
}

function BFS(startIndex, maps, countMap, target) {
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  const queue = [startIndex];
  
  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    
    const currentKey = [currentX, currentY].toString();
    const currentCount = countMap.get(currentKey);
    
    if (maps[currentX][currentY] === target) {
      return [currentCount, [currentX, currentY]];
    }
  
    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];
      const canMove =
            nextX >= 0 &&
            nextX < maps.length &&
            nextY >= 0 &&
            nextY < maps[0].length &&
            !countMap.has([nextX, nextY].toString()) &&
            maps[nextX][nextY] !== 'X';
      
      if (!canMove) {
        continue;
      }
      
      queue.push([nextX, nextY]);
      countMap.set([nextX, nextY].toString(), currentCount + 1);
    }
  }
  
  return [-1, [0, 0]];
}

function solution(maps) {
  const startIndex = getStartIndex(maps);
  const countMap = new Map();
  
  countMap.set(startIndex.toString(), 0);
  
  const [leverCount, leverIndex] = BFS(startIndex, maps, countMap, 'L');
  
  if (leverCount === -1) {
    return -1;
  }
  
  countMap.clear();
  countMap.set(leverIndex.toString(), 0);
  
  const [exitCount, exitIndex] = BFS(leverIndex, maps, countMap, 'E');
  
  if (exitCount === -1) {
    return -1;
  }
  
  return leverCount + exitCount;
}