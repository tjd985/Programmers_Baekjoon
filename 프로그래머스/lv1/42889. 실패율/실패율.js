function solution(n, stages) {
  let answer = [];
  
  for(let i=1; i<=n; i++){
    let trying = stages.filter((index) => index >= i).length;
    let fail = stages.filter((index) => index === i).length;
    answer.push([i, fail/trying]);
  }
  
  answer.sort((a,b) => b[1]-a[1]);
  return answer.map((index) => index[0]);
}