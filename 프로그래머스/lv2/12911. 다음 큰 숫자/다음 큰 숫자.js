function solution(n) {
  let count1 = n.toString(2).match(/1/g).length;
  let binA = 0;
  
  while(1){
    n += 1;
    binA = n.toString(2).match(/1/g).length;
    
    if(binA === count1) break;
  }
  
  return n;
}