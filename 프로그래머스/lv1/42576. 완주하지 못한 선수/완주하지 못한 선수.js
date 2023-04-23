function solution(participant, completion) {
  participant.sort((a,b) => a>b? 1 : -1);
  completion.sort((a,b) => a>b? 1 : -1);
  
  for(let i=0; i<completion.length; i++){
    if(participant[i] !== completion[i]){
      return participant[i];
      break;
    }
  }
  return participant[participant.length-1];
}