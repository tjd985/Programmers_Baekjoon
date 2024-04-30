function solution(topping) {
  const topping1 = new Map();
  const topping2 = new Map();
  let result = 0;
  
  for (const value of topping) {
    const currentCount = topping2.get(value);
    
    topping2.set(value, (currentCount || 0) + 1);
  }
  
  for (let i = 0; i <= topping.length; i++) {
    const currentTopping = topping[i];
    const currentCount = topping1.get(currentTopping);
    const currentCount2 = topping2.get(currentTopping);
    
    topping1.set(currentTopping, (currentCount || 0) + 1);
    topping2.set(currentTopping, currentCount2 - 1);
    
    if (currentCount2 === 1) {
      topping2.delete(currentTopping);
    }
    
    if (topping1.size === topping2.size) {
      result++;
    }
  }
  
  return result;
}