function solution(s) {
  let deleteZero = 0;
  let cnt = 0;
  while(s.length !== 1){
    for(let i=0; i<s.length; i++){
      if(s[i] === "0") deleteZero++;
    }
    s = s.replace(/0/g, "").length.toString(2);
    cnt++;
  }
  return [cnt, deleteZero];
}