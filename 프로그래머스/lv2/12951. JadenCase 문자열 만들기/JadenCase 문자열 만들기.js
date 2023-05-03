function solution(s) {
  s = s.toLowerCase().split("");
  s[0] = s[0].toUpperCase();
  
  for(let i=0; i<s.length; i++){
    if(i > 0 && s[i-1] === " ") s[i] = s[i].toUpperCase();
  }
  return s.join("");
}