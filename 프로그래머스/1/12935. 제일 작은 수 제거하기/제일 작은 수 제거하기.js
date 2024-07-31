function solution(arr) {
  const answer = arr.filter((index) => {
    return index > Math.min(...arr);
  });
    
  return answer.length === 0 ? [-1] : answer;
}