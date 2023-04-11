function solution(number) {
  let cnt = 0;
  
  for(let i=0; i<number.length-2; i++){
    for(let j=i+1; j<number.length-1; j++){
      for(let n=j+1; n<number.length; n++){
        if(number[i]+number[j]+number[n] === 0) cnt++;
      }
    }
  }
  return cnt;
}