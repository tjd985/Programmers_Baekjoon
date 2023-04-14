function solution(answer) {
  let std1 = "";
  let std2 = "";
  let std3 = "";
  let submit = [];
 
  std1 = std1.padStart(answer.length, "12345");
  std2 = std2.padStart(answer.length, "21232425");
  std3 = std3.padStart(answer.length, "3311224455");
  let arr = [std1, std2, std3];
  
  let answers = arr.map((index, number) => {
    let cnt = 0;
    for(let i=0; i<index.length; i++){
      if(parseInt(index[i]) === answer[i]) cnt++;
    }
    return cnt;
  });
  
  for(let i=0; i<answers.length; i++){
    if(Math.max(...answers) === answers[i]) submit.push(i+1);
  }
  return submit;
}