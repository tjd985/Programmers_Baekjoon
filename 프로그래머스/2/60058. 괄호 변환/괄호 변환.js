function seperateString(string) {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < string.length; i++) {
    const currentCase = string[i];

    if (openCount !== 0 && openCount === closeCount) {
      return [string.slice(0, i), string.slice(i)];
    }

    if (currentCase === "(") {
      openCount++;

      continue;
    }

    closeCount++;
  }
  
  return [string, ""];
}

function isComplete(string) {
  const stack = [];
  
  for (const character of string) {
    if (character === ")") {
      if (!stack.length) {
        return false;
      }
      
      if (stack[stack.length - 1] === "(") {
        stack.pop();

        continue; 
      }
    }
    
    stack.push(character);
  }
  
  return !stack.length ? true : false;
}

function remakeU(u) {
  let result = "";
  
  for (let i = 1; i < u.length - 1; i++) {
    if (u[i] === "(") {
      result += ")";
      
      continue;
    }
    
    result += "(";
  }
  
  return result;
}

function solution(p) {
  if (!p.length || isComplete(p)) {
    return p;
  }
  
  const [u, v] = seperateString(p);
  
  if (isComplete(u)) {
    return u + solution(v);
  }
  
  const editedU = remakeU(u);

  return `(${solution(v)})${editedU}`;
}