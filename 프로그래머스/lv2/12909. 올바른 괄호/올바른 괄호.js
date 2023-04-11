function solution(s){
  let answer = s.split("");
  let cnt = 0;
  
  for(let i=0; i<answer.length;i++){
    if(cnt < 0) return false;
      else if(answer[i] === "(") {
        cnt++;} 
      else {
        cnt--;}
  }
  
  if(cnt === 0) return true;
  else return false;
}