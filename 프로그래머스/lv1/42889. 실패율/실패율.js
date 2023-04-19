function solution(n, stages) {
  let trying = [];
  let fail = [];
  
  for(let i=1; i<=n; i++){
    let cnt = 0;
    let failcnt = 0;
    
    for(let j=0; j<stages.length; j++){
      if(stages[j] >= i){
        cnt++;
        if(stages[j] === i) failcnt++;
      }
    }
    trying.push(cnt);
    fail.push(failcnt);
  }
  
  let failure = trying.map((index,i) => [i+1,fail[i] / index]).sort((a,b) => b[1]-a[1]);
  return failure.map((index) => index[0]);
}