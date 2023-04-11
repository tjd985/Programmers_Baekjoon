function solution(s){
  let a = s.match(/p/ig);
  let b = s.match(/y/ig);
  if(a === null && b === null) return true;
    else if(a === null && b !== null) return false;
    else if(a !== null && b === null) return false;
    else if(a.length === b.length) return true;
    else return false;
}

solution("pPoooyY");