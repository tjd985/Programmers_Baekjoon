function solution(n,a,b){
  let cnt = 0;
  while(a !== b){
    cnt++;
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
  }
  return cnt;
}