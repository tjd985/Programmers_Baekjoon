function solution(n) {
  let arr = [];
  let solution = [];
  if(n<3) return n;
  
  while(n>=3){
    arr.push(Math.floor(n%3));
    n = n/3;
  }
  arr.push(Math.floor(n));
  console.log(arr);
  solution = arr.reverse().map((index, i) => index*Math.pow(3,i));
  return solution.reduce((n,m) => n+m, 0);
}