function solution(n){
  let arr = [];
  n = String(n).split("").reverse();
  
  for(let i = 0; i<n.length; i++){
    arr.push(parseInt(n[i]));
  }
  return arr
}