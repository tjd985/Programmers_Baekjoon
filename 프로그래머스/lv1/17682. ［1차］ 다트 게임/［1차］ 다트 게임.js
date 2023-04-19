function solution(arr) {
  arr = arr.split("");
  let number = [];
  let cnt = -1;
  let answer = [];
  
  for(let i=0; i<arr.length; i++){
    if(Number.isInteger(parseInt(arr[i]))) {
      if(parseInt(arr[i]) === 1 && parseInt(arr[i+1]) === 0){
        number.push(parseInt(10));
        i++;
      }
      else number.push(parseInt(arr[i]));
    }
  }
  
  for(let i=0; i<arr.length; i++){
    
    if(Number.isInteger(parseInt(arr[i]))) {
      if(parseInt(arr[i]) === 1 && parseInt(arr[i+1]) === 0){
        cnt++;
        i++;
      }
      else {
        cnt++;
      }
    }
    else if(arr[i] === "S") {
      answer.push(number[cnt]);
    }
    else if(arr[i] === "D") {
      answer.push(Math.pow(number[cnt], 2));
    }
    else if(arr[i] === "T") {
      answer.push(Math.pow(number[cnt], 3));
    }
    else if(arr[i] === "#") {
      answer[answer.length-1] = answer[answer.length-1]*-1;
    }
    else if(arr[i] === "*") {
      answer[answer.length-1] = answer[answer.length-1]*(2);
      answer[answer.length-2] = answer[answer.length-2]*(2);
    }
  }
  return answer.reduce((a,b)=>a+b, 0);
}