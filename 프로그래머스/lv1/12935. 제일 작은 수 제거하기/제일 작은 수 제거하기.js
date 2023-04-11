function solution(arr) {
  let answer = arr.filter((index) => index>Math.min(...arr));
  return answer.length === 0? [-1] : answer;
}