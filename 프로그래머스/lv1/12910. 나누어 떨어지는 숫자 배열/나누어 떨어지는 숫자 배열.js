function solution(arr, divisor) {
  arr.sort((a,b)=> a-b);
  let answer = arr.filter((index) => index%divisor === 0);
  if(answer.length== 0) answer.push(-1);
  
  return answer;
}