function solution(t, p) {
  let arr = [];
  
  for(let i=0; i<t.length - p.length + 1; i++){
    arr.push(t.slice(i, i + p.length));
  }
  let solution = arr.filter((index) => parseInt(index) <= parseInt(p));
  return solution.length;
}
