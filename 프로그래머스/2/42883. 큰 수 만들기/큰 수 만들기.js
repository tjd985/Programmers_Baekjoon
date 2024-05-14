function solution(number, k) {
  let count = 0;
  const stack = [];
  
  for (let i = 0; i < number.length; i++) {
    const currentNum = Number(number[i]);
    let topValue = stack[stack.length - 1];
    
    if (!stack.length) {
      stack.push(currentNum);

      continue;
    }
    
    while (topValue < currentNum) {
      if (count == k) {
        break;
      }
      
      stack.pop();
      count++;
      
      topValue = stack[stack.length - 1];
    }
    
    stack.push(currentNum);
    
    if (count === k) {
      return stack.join("") + number.slice(i + 1);
    }
  }
  
  return number.slice(0, number.length - (k - count));
}