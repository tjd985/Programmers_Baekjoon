function solution(n, left, right) {
  let arr = [];
  let cnt = 0;
  for(let i=left; i<=right; i++){
    arr[cnt] = Math.max(Math.floor(i/n), i%n) + 1;
    cnt++;
  }
  return arr;
}