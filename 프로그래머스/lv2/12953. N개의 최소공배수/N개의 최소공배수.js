function euclid(a,b){
  let max = a*b;

  while(b>0){
    let temp = a;
    a = b;
    b = temp % b;
  }
  return max/a;
}

function solution(n){
  n = n.sort((a,b) => a-b);
  let temp = 0;
  
  for(let i=0; i<n.length-1; i++){
    if(i === 0) temp = euclid(n[i], n[i+1]);
    else {
      temp = temp >= n[i+1]? euclid(temp, n[i+1]) : euclid(n[i+1], temp);
    }
  }
  return temp;
}