function solution(x, y) {
  x = x.split("");
  y = y.split("");           
  let answer = "";
 
  for(let i=0; i<10; i++){
    let x_board = x.filter((index) => parseInt(index) === i);
    let y_board = y.filter((index) => parseInt(index) === i);
    if(x_board.length === 0 && y_board.length === 0) continue;
    answer += String(i).repeat(Math.min(x_board.length, y_board.length));
  }
  answer = answer.split("").sort((a,b)=>b-a).join("");
  return answer.length === 0? "-1": parseInt(answer) === 0? "0" : answer;
}