function solution(numbers) {
  const result = new Set();
  const isVisit = new Array(numbers.length).fill(false);
  const done = {};
  
  function isDecimal(targetNumber) {
    let count = 0;
    
    for (let i = 1; i <= targetNumber; i++) {
      if (!(targetNumber % i)) {
        count++;
      }
    }
    
    return count === 2 ? true : false;
  }
  
  function DFS(accumulate) {
    if (!done[accumulate] && isDecimal(accumulate)) {
      result.add(accumulate);
    }
    
    done[accumulate] = true;
    
    for (let i = 0; i < numbers.length; i++) {
      if (isVisit[i]) {
        continue;
      }
      
      isVisit[i] = true;
      DFS(Number(accumulate + numbers[i]));
      isVisit[i] = false;
    }
  }
  
  DFS("");
  
  return result.size;
}