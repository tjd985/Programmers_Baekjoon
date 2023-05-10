function solution(s) {
  if(s.length % 2 !== 0) return 0;
    
  let cnt = 0;
  let obj = {
    ")":"(",
    "}":"{",
    "]":"["
  }
  const open = ["(", "{", "["];
  const close = ["}", ")", "]"];
  
  s = s.split("");
  
  for(let i=0; i<s.length; i++){
    let stack = [];
    
    for(let j=0; j<s.length; j++){
      if(stack.length === 0){
        if(close.includes(s[j])) break;
        else stack.push(s[j]);
      }
      else {
        if(stack[stack.length-1] === obj[`${s[j]}`] && j === s.length-1) cnt++;
        else if(open.includes(s[j])) stack.push(s[j]);
        else if(stack[stack.length-1] === obj[`${s[j]}`]) stack.pop();
        else break;
      }
    }
  s.splice(s.length-1, 0 ,s.shift());
  }
  return cnt;
}