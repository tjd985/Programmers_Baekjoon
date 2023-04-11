function solution(numbers) {
  let answer = [];
  for(let i=0; i<10; i++){
    numbers.includes(i)? null : answer.push(i); 
  }
  return answer.reduce((n,m)=>n+m, 0);
}