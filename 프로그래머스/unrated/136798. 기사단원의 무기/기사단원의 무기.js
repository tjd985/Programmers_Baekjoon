function solution(number, limit, power) {
  let arr = [];
  for(let i=1; i<=number; i++){
    let cnt = 0;
    for(let j=1; j<=i/2; j++){
      if(i%j === 0) cnt++;
    }
    if(cnt+1 > limit) cnt = power-1;
    arr.push(cnt+1);
  }
  return arr.reduce((a,b) => a+b, 0);
}