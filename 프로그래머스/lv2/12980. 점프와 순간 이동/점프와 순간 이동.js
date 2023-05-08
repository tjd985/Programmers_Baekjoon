function solution(n){
  let cnt = 0;
  
  while(n !== 1){
    if(n/2 !== Math.floor(n/2)){
      n -= 1;
      cnt++;
    }
    n = n/2;
  }
  return cnt+1;
}