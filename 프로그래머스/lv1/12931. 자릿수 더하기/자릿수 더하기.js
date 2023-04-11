function solution(n){
  let answer = [];
  n = String(n);
  let arr = n.split("");
  for(let i =0;i<arr.length;i++){
    answer.push(parseInt(arr[i]));
  }
  return answer.reduce((l,m) => l+m)
}