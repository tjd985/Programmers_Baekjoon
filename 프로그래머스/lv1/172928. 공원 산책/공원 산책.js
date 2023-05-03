function solution(park, routes) {
  const colLen = park.length;
  const rowLen = park[0].length;
  
  let curPos;
  
  for (let i = 0; i < colLen; i += 1) {
    for (let j = 0; j < rowLen; j += 1) {
      if (park[i][j] === 'S') {
        curPos = [i, j];
        break;
      }
    }
    
    if (curPos) break;
  }
  
  const dPos = [0, 0];
  
  for (const route of routes) {
    const [dir, value] = route.split(' ');
    let numberValue = Number(value);
    
    if (dir === 'E') dPos[1] += 1;
    else if (dir === 'W') dPos[1] -= 1;
    else if (dir === 'S') dPos[0] += 1;
    else if (dir === 'N') dPos[0] -= 1;
    
    let accValue = 0;
    
    while (numberValue) {
      numberValue -= 1;
      accValue += 1;
      
      curPos[0] += dPos[0];
      curPos[1] += dPos[1];
      
      if (
        !park[curPos[0]]
        || !park[curPos[0]][curPos[1]]
        || park[curPos[0]][curPos[1]] === 'X'
      ) {
        curPos[0] -= dPos[0] * accValue;
        curPos[1] -= dPos[1] * accValue;
        break;
      }
    }
    
    dPos[0] = 0;
    dPos[1] = 0;
  }
  
  return curPos;
}
