function solution(k, tangerine) {
  let obj = {};
  let hap = 0;
  
  tangerine.forEach((n) => {
    obj[n] = obj[n]? ++obj[n] : 1;
  });

  let arr = Object.values(obj).sort((a,b) => b-a);
  
  for(let i=0; i<arr.length; i++){
    hap+=arr[i];
 
    if(hap >= k){
      return i+1;
      break;
    }
  }
}
