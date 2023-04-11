function solution(progress, speed){
  let left = progress.map((index) => 100-index);
  let answer = [];
  for(let i =0; i<left.length;i++){
    answer.push(Math.ceil(left[i]/speed[i]));
  }
  
  let cnt = 0;
  let Max = answer[0];
  let realAnswer = [];
  
  for(let i =0; i<answer.length; i++){
    if(Max < answer[i]){
      Max = answer[i];
      realAnswer.push(cnt);
      cnt = 1;
    }
    else cnt++;
  }
  realAnswer.push(cnt);
  return realAnswer;
}