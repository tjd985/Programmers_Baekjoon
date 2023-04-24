function solution(s) {
  let answer = 0;
  let first_cnt = 0;
  let other_cnt = 0;
  let first = "";
  
  for(let i=0; i<s.length; i++){
    if(first_cnt === 0 && other_cnt === 0) first = s[i];
    if(first === s[i]) first_cnt++;
    else other_cnt++;
    
    if(first_cnt === other_cnt) {
      answer++;
      first_cnt = 0;
      other_cnt = 0;
    }
  }
  return first_cnt !==0? answer+1 : answer;
}