function solution(n) {
    let cnt = 0;
  
  while(1){
    if(cnt>=500) return -1;
    else if(n === 1) return cnt;
    
    else if(n%2 === 0){
      cnt++;
      n = n/2;
    }
    else{
      cnt++;
      n = n*3+1;
    }
  }
}

console.log(solution(626331));