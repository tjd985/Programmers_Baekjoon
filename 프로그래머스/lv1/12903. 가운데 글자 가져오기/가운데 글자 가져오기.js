function solution(s) {
  let answer = [];
  let index = ([...s].length -1) / 2;
  if(index - Math.floor(index) === 0) answer.push(s[index]);
  else{
    answer.push(s[Math.floor(index)]);
    answer.push(s[Math.ceil(index)]);
  }
  return answer.join("");
}