function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let currentValue = sequence[0];
  const length = sequence.length;
  const result = [];
  
  while (start < length && end < length) {
    if (currentValue >= k) {
      if (currentValue === k) {
        result.push([start, end, end - start]);
      }
      
      if (start === end) {
        start++;
        end++;
        currentValue = sequence[start];
        
        continue;
      }
      
      currentValue -= sequence[start];
      start++;
      
      continue;
    }
    
    end++;
    
    currentValue += sequence[end];
  }
  
  return result.sort(([start1, end1, distance1], [start2, end2, distance2]) => {
    if (distance1 === distance2) {
      return start1 - start2;
    }
    
    return distance1 - distance2;
  })[0].slice(0, 2);
}