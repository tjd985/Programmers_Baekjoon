function solution(arr, loc){
  const answer = arr.map((index, i) => [index,i]);
  let count = 0;
  
  while (true) {
    if(answer[0][0] < Math.max(...answer.map((index) => index[0]))){
      answer.push(answer.shift());
    }
    else {
      const a = answer.shift();
        
      count++;
        
      if(a[1] === loc) {
        break;
      }
    }
  }
    
  return count;
}