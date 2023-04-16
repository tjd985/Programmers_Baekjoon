function solution(n){
  let arr = Array.from(Array(n+1), (index, i) => i);
  
  for(let i=2; arr[i]<=Math.sqrt(n+1); i++){
    if(arr[i] !== 0){
      for(let j=i*2; j<=n+1; j+=i){
      arr[j] = 0;
     }
    }
  }
  arr.splice(0,2);
  arr = arr.filter((index) => index !== 0);
  return arr.length;
}