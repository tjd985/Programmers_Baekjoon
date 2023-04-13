function solution(s) {
  let solution = [-1];
  for(let i=1; i<s.length; i++){
    let index = -1;
    for(let j=0; j<i; j++){
     if(s[i] === s[j]){
       index = i-j;
     }  
    }
    solution.push(index);
  }
  return solution;
}