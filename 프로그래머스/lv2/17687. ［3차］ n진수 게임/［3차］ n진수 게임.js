function solution(n, t, m, p) {
  let str = "0";
  let cnt = 0;
  p = p-1;
  let answer = "";
  const a = ["A", "B", "C", "D", "E", "F"];
  
  while(str.length < t*m){
    cnt++;
    if(n > 10 && cnt >= 10 && cnt < n){
      str += a[cnt%10];
    }
    else str += cnt.toString(n).toUpperCase();
  }
  
  for(let i=p; i<str.length; i = i+m){
    if(answer.length === t) break;
    answer+=str[i];
  }
  
  return answer;
}