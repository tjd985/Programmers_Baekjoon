function solution(n, m, section) {
  let cnt = 0;
  let arr = Array.from(Array(n), (index) => 1);
  section.forEach((index) => arr.splice(index-1, 1, 0));
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
      for(let j=i; j<i+m; j++) arr.splice(j, 1, 1);
      cnt++;
    }
  }
  return cnt;
}