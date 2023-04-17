function solution(k, arr){
  let honor = [];
  let answer = [];
  
  for(let i=0; i<arr.length; i++){
    if(i<k){
      honor.push(arr[i]);
      honor.sort((a,b) => a-b);
      answer.push(honor[0]);
    }
    else{
      honor.push(arr[i]);
      honor.sort((a,b) => a-b);
      honor.shift();
      answer.push(honor[0]);
    }
  }
  return answer;
}