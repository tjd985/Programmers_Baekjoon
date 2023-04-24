function solution(board, moves) {
  let answer = [];
  let arr = Array.from(Array(board.length), (index) => Array(board.length).fill(0));
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      arr[i][j] = board[j][i];
    }
  }
  
  let cnt = 0;
  
  arr = arr.map((index) => {
    return index.filter((index2)=> index2 !== 0);
  });
  
  while(moves.length > 0){
    let index = moves.shift() - 1;
    if(arr[index][0] !== undefined) {
      let index2 = arr[index].shift();
      answer.push(index2);
    }
    if(answer[answer.length-1] === answer[answer.length-2]){
      if(answer.length !== 0){
        answer.pop();
        answer.pop();
        cnt++;
      }
    }
  }
  return cnt*2;
}