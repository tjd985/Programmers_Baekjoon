function solution(arrayA, arrayB) {
  const result = [];
  
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  
  const smallestAFactors = getFactors(arrayA[0]);
  const smallestBFactors = getFactors(arrayB[0]);
  
  getResult(smallestAFactors, "A");
  getResult(smallestBFactors, "B");
  
  return result.length ? Math.max(...result) : 0;
  
  function getResult(targetFactorList, FactorType) {
    for (const factor of targetFactorList) {
      let isContinue = false;

      for (const value of FactorType === "A" ? arrayA : arrayB) {
        if (value % factor) {
          isContinue = true;

          break;
        }
      }

      if (!isContinue) {
        for (const value of FactorType === "A" ? arrayB : arrayA) {
          if (!(value % factor)) {
            isContinue = true;

            break;
          }
        }
      }

      if (isContinue) {
        isContinue = false;

        continue;
      }

      result.push(factor);

      break;
    }
  }
}

function getFactors(targetNumber) {
  const result = [];
  
  for (let i = targetNumber; i >= 1; i--) {
    if (targetNumber % i) {
      continue;
    }
    
    result.push(i);
  }
  
  return result;
}