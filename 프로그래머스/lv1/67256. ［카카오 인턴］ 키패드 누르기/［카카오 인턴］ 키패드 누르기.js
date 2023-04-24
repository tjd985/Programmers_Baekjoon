function solution(numbers, hand) {
  let arr = [[1,2,3], [4,5,6], [7,8,9], ["*", 0, "#"]];
  let answer = "";
  let L = [3,0];
  let R = [3,2];
  let Middle = [0,0];
  
  while(numbers.length > 0){
    let index = numbers.shift();
    let n=0;
    let m=0;
    
    if(index === 1 || index === 4 || index ===7) {
      answer+="L";
      
      arr.forEach((index1, i) => {
        index1.forEach((index2, j) => {
          if(index2 === index){
            n = i;
            m = j;
          }
        });
      });
      L = [n,m];
    }
    else if(index === 3 || index === 6 || index === 9) {
      answer+="R";
      
      arr.forEach((index1, i) => {
        index1.forEach((index2, j) => {
          if(index2 === index){
            n = i;
            m = j;
          }
        });
      });
      R = [n,m];
    }
    else{
      arr.forEach((index1, i) => {
        index1.forEach((index2, j) => {
          if(index2 === index){
            n = i;
            m = j;
          }
        });
      });
      Middle = [n,m];
      let L_far = Math.abs(L[0] - Middle[0]) + Math.abs(L[1] - Middle[1]);
      let R_far = Math.abs(R[0] - Middle[0]) + Math.abs(R[1] - Middle[1]);
      
      if(L_far < R_far){
        answer += "L";
        L = [n,m];
      }
      else if(L_far > R_far){
        answer += "R";
        R = [n,m];
      }
      else {
        answer += hand[0].toUpperCase();
        if(hand[0].toUpperCase() === "R") R = [n,m];
        else {L = [n,m];}
      }
    }
  }
  return answer;
}