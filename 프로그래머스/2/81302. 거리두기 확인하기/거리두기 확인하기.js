function solution(places) {
  const result = [];
  
  for (const place of places) {
    for (let i = 0; i < 5; i++) {
      let isOkay = true;
      
      for (let j = 0; j < 5; j++) {
        const startPoint = place[i][j];
        
        if (startPoint === "P") {
          if (findPerson(place, [i, j, 0])) {
            isOkay = true;
            
            continue;
          }
          
          isOkay = false;
          
          break;
        }
      }
      
      if (!isOkay) {
        result.push(0);
        
        break;
      }
      
      if (i === 4 && isOkay) {
        result.push(1);
      }
    }
  }
  
  return result;
  
  function findPerson(place, startPoint) {
    const isVisit = Array.from({length: 5}, (value) => new Array(5).fill(false));
    const queue = [startPoint];
    const moveX = [-1, 0, 1, 0];
    const moveY = [0, -1, 0, 1];
    
    while (queue.length) {
      const [currentX, currentY, count] = queue.shift();
      
      isVisit[currentX][currentY] = true;
      
      if (count !== 0 && place[currentX][currentY] === "P") {
        return 0;
      }
      
      if (count === 2) {
        continue;
      }
      
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];

        const canMove = nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5 && place[nextX][nextY] !== "X" && !isVisit[nextX][nextY];
        
        if (canMove) {
          queue.push([nextX, nextY, count + 1]);
        }
      }
    }
    
    return 1;
  }
}