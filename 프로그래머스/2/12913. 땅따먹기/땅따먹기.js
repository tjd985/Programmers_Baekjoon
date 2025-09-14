function calculate(numList) {
  const [firstBigValue, firstBigIndex] = numList.reduce((acc, cur, index) => {
    const [value] = acc;
    
    return value < cur ? [cur, index] : acc;
  }, [0, 0]);
  
  const [secondBigValue, secondBigIndex] = numList.reduce((acc, cur, index) => {   
    const [value] = acc;
    
    if (index === firstBigIndex) {
      return acc;
    }
    
    return value < cur ? [cur, index] : acc;
  }, [0, 0]);
  
  return [
    firstBigValue,
    firstBigIndex,
    secondBigValue,
    secondBigIndex
  ];
}

function solution(land) {
  for (let i = land.length - 1; i > 0; i--) {
    const row = land[i];
    const nextRow = land[i - 1];
    
    const [
      biggestValue,
      biggestValueIndex,
      secondBigValue,
      secondBigIndex
    ] = calculate(row);
    
    nextRow.forEach((_, index) => {
      if (biggestValueIndex === index) {
        nextRow[index] += secondBigValue;
        
        return;
      }
      
      nextRow[index] += biggestValue;
    });
  }
  
  return Math.max(...land[0]);
}