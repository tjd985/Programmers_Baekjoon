function calcScore(lionInfo, apeachInfo) {
  let lionScore = 0;
  let apeachScore = 0;
  
  for (let i = 0; i < 11; i++) {
    const score = 10 - i;
    
    if (lionInfo[i] > apeachInfo[i]) {
      lionScore += score;
      
      continue;
    }
    
    if (apeachInfo[i] > 0) {
      apeachScore += score;
    }
  }
  
  return [lionScore, apeachScore];
}

function compareLower(lion, current) {
  for (let i = 10; i >= 0; i--) {
    if (lion[i] !== current[i]) {
      return lion[i] > current[i] ? lion : current;
    }
  }
  
  return current;
}

function solution(n, info) {
  let maxGap = 1;
  let answer = [-1];
  
  function runner(index, n, lionInfo) {
    if (index === 11 || n === 0) {
      if (n) {
        lionInfo[10] += n;
      }
      
      const [lionScore, apeachScore] = calcScore(lionInfo, info);
      const gap = lionScore - apeachScore;
      
      if (gap > maxGap) {
        maxGap = gap;
        answer = lionInfo;
      }
      
      if (gap === maxGap) {
        answer = compareLower(lionInfo, answer);
      }
      
      return;
    }
    
    const apeachArrow = info[index];
    
    if (n > apeachArrow) {
      const updateLionInfo = [...lionInfo];
      const lionArrow = apeachArrow + 1;
      
      updateLionInfo[index] += lionArrow;
      
      runner(index + 1, n - lionArrow, updateLionInfo);
    }
    
    runner(index + 1, n, lionInfo);
  }
  
  runner(0, n, new Array(11).fill(0));
  
  return answer;
}