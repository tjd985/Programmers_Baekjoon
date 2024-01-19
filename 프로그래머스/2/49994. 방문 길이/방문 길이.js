function solution(dirs) {
  const visitedRoute = {};
  let result = 0;
  let current = [0, 0];

  for (const direction of dirs) {
    const [currentX, currentY] = current;
    const [nextX, nextY] = move(current, direction);
    
    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) {
      continue;
    }
    
    current = [nextX, nextY];
    const route = `${currentX}${currentY}${nextX}${nextY}`;
    const reverseRoute = `${nextX}${nextY}${currentX}${currentY}`
    
    if (visitedRoute[route]) {
      continue;
    }
    
    result += 1;
    visitedRoute[route] = true;
    visitedRoute[reverseRoute] = true;
  }
  
  return result;
}

function move(current, direction) {
  let [nextX, nextY] = current;

  switch(direction) {
    case "U":
      nextY += 1;

      break;

    case "D":
      nextY -= 1;

      break;

    case "L":
      nextX -= 1;

      break;
      
    case "R":
      nextX += 1;

      break;
  }
  
  return [nextX, nextY];
}