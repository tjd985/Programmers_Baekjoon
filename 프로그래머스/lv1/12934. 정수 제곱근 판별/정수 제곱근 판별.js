function solution(n){
  let a = Math.sqrt(n);
  if(a - Math.floor(a) === 0) return (a+1)*(a+1);
    else return -1; 
}

solution(121);