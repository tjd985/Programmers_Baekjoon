function solution(order) {
  const stack = [];
  let result = 0;
  let orderIndex = 0;
  
  for (let i = 1; i <= order.length; i++) {
    if (i === order[orderIndex]) {
      result++;
      orderIndex++;
      
      while (stack[stack.length - 1] === order[orderIndex]) {
        if (!stack.length) {
          break;
        }
        
        stack.pop();
        
        result++;
        orderIndex++;
      }
      
      continue;
    }
    
    stack.push(i);
  }
  
  return result;
}