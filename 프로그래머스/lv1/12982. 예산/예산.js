function solution(d, budget) {
  let arr = d.sort((a,b) => a-b);
  let cnt = 0;
  let hap = 0;
  
  for(let i=0; i<arr.length; i++){
    if(hap+arr[i] > budget) break;
    hap += arr[i];
    cnt++;
  }
  return cnt;
}