function solution(storey) {
  let count = 0;
  let result = 0;
  
  while(count <= String(storey).length) {
    const stringStorey = String(storey);
    const currentNumber = Number(stringStorey[stringStorey.length - count - 1]);
    
    if (currentNumber === 0) {
      count++;
      
      continue;
    }
    
    const upperNumber = 10 - currentNumber;
    
    if (upperNumber < currentNumber) {
      storey += upperNumber * Math.pow(10, count);
      result += upperNumber;
    } else if (upperNumber > currentNumber) {
      storey -= currentNumber * Math.pow(10, count);
      result += currentNumber;
    } else {
      const nextNumber = stringStorey[stringStorey.length - count];      
      
      if (nextNumber !== undefined && Number(nextNumber) <= 5) {
        storey -= currentNumber * Math.pow(10, count);
        result += currentNumber;
      } else {
        storey += upperNumber * Math.pow(10, count);
        result += upperNumber;
      }
    }
    
    count++;
  }
  
  return result;
}