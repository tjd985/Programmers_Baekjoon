function solution(queue1, queue2) {
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
  let count = 0;
  let queue1Index = 0;
  let queue2Index = 0;
  const targetNumber = (queue1Sum + queue2Sum) / 2;
  const lengthSum = queue1.length + queue2.length;
  
  while (true) {
    if (queue1Index > lengthSum || queue2Index > lengthSum) {
      break;
    }
    
    if (queue1Sum === targetNumber) {
      return count;
    }
    
    if (targetNumber < queue1Sum) {
      const popNumber = queue1[queue1Index];
      
      queue2.push(popNumber);
      
      queue1Sum -= popNumber;
      queue2Sum += popNumber;
      queue1Index++;
      
      count++;
      
      continue;
    }
    
    const popNumber = queue2[queue2Index];
      
    queue1.push(popNumber);

    queue1Sum += popNumber;
    queue2Sum -= popNumber;
    queue2Index++;
    
    count++;
  }
  
  return -1;
}