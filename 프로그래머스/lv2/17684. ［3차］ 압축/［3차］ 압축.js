function solution(msg) {
  let answer = [];
  let dic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  msg = msg.split("");
  
  function isInclude(str){
    if(dic.includes(str)) {
      if(msg.length === 0){
        return str;
      }
      return isInclude(str+msg.shift());
    }
    else {
      dic.push(str);
      msg.unshift(str[str.length-1]);
      return str.slice(0, str.length-1);
    }
  }
  
  while(msg.length > 0){
    let word = isInclude(msg.shift());
    answer.push(dic.indexOf(word)+1);
  }
  
  return answer;
}