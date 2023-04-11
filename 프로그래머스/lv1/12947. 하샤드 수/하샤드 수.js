function solution(n) {
  let a = String(n).split("").map((index) => parseInt(index));
  
  if(n % (a.reduce((n,m) => n+m)) === 0) return true;
  else return false;
}