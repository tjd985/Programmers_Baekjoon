function solution(elements) {
  const result = new Set();
  const circularElements = [...elements, ...elements];
  
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sum = circularElements
        .slice(j, j + i)
        .reduce((acc, cur) => acc + cur, 0);
            
      result.add(sum);
    }
  }
  
  return result.size;
}