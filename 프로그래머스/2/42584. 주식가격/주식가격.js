function solution(prices) {
  const result = [];
  
  for (let i = 0; i < prices.length; i++) {
    let index = 0;
    
    for (let j = i + 1; j < prices.length; j++) {
      index++;
      
      if (prices[i] > prices[j]) {
        break;
      }
    }
    
    result.push(index);
  }
  
  return result;
}