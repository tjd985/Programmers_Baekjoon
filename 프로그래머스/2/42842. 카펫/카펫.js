function solution(brown, yellow) {
  const sum = brown + yellow;
  const sumFactors = findFactors(sum);
  
  for (let i = 0; i < sumFactors.length; i++) {
    if ((sumFactors[i] - 2) * (sum / sumFactors[i] - 2) === yellow) {
      return [sumFactors[i], sum / sumFactors[i]].sort((a, b) => b - a);
    }
  }
}


function findFactors(targetNumber) {
  const result = [];
  
  for (let i = 3; i <= Math.floor(Math.sqrt(targetNumber)); i++) {
    if (targetNumber % i === 0) {
      result.push(i);
    }
  }
  
  return result;
}