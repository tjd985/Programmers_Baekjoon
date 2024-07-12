function solution(arr) {
  const result = [0, 0];
  
  function divideArray(x, y, n) {
    if (n === 1) {
      result[arr[x][y]]++;
      
      return;
    }
    
    const firstValue = arr[x][y];
    
    let isSame = true;
    
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[i][j] !== firstValue) {
          isSame = false;
          
          break;
        }
      }
      
      if (!isSame) {
        break;
      }
    }
    
    if (isSame) {
      result[firstValue]++;
      
      return;
    }
    
    const nextLength = n / 2;
    
    divideArray(x, y, nextLength);
    divideArray(x + nextLength, y, nextLength);
    divideArray(x, y + nextLength, nextLength);
    divideArray(x + nextLength, y + nextLength, nextLength);
  }
  
  divideArray(0, 0, arr.length);
  
  return result;
}