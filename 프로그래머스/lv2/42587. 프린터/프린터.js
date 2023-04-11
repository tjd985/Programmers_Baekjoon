function solution(arr, loc){
  let answer = arr.map((index, i) => [index,i]);
  let cnt = 0;
  
  while(1){
    if(answer[0][0] < Math.max(...answer.map((index) => index[0]))){
      answer.push(answer.shift());
    }
    else {
      let a = answer.shift();
      cnt++;
      if(a[1] === loc) {
        break;
      }
    }
  }
  return cnt;
}