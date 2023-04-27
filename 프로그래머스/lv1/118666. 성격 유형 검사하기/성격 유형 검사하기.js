function solution(survey, choices) {
  let board = ["R",0,"T",0,"C",0,"F",0,"J",0,"M",0,"A",0,"N",0];
  
  for(let i=0; i<survey.length; i++){
    let a = 0;
    switch (choices[i]){
      case 1:
        a = board.findIndex((index) => index === survey[i][0]);
        board[a+1] += 3;
        break;
      case 2:
        a = board.findIndex((index) => index === survey[i][0]);
        board[a+1] += 2;
        break;
      case 3:
        a = board.findIndex((index) => index === survey[i][0]);
        board[a+1] += 1;
        break;
      case 4:
        break;
      case 5:
        a = board.findIndex((index) => index === survey[i][1]);
        board[a+1] += 1;
        break;
      case 6:
        a = board.findIndex((index) => index === survey[i][1]);
        board[a+1] += 2;
        break;
      case 7:
        a = board.findIndex((index) => index === survey[i][1]);
        board[a+1] += 3;
        break;
    }
  }
  let answer = ""
  while(board.length > 0){
    let arr = board.splice(0,4);
    
    if(arr[1] >= arr[3]) answer += `${arr[0]}`;
    else answer += `${arr[2]}`;
  }
  return answer; 
}