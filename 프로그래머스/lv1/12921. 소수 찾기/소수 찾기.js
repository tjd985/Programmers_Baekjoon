function solution(n){
  let arr = Array.from(Array(n+1), (index) => true);
  
  for(let i=2; i*i<=n; i++){
    if(arr[i]){
      for(let j=i*i; j<=n; j+=i){
        arr[j] = false;
      }
    }
  }
  
  arr.splice(0,2,false, false);
  let answer = arr.filter((index) => index === true);
  return answer.length;
}