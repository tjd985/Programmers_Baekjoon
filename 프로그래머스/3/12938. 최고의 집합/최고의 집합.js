function solution(n, s) {
  const value = Math.floor(s / n);
  const rest = s % n;
  
  if (!value) {
    return [-1];
  }
  
  const answer = new Array(n).fill(value);
  
  for (let i = 1; i <= rest; i++) {
    answer[i] += 1;
  }
  
  return answer.sort((a, b) => a - b);
}