function substitution(string) {
  const stack = [];
  let result = "";
  
  for (const character of string) {
    if (!stack.length) {
      stack.push(character);
      
      continue;
    }
    
    if (character === "#") {
      result += stack.pop().toLowerCase();
      
      continue;
    }
    
    result += stack.pop();
    stack.push(character);
  }
  
  if (stack.length) {
    result += stack.pop();
  }
  
  return result;
}

function solution(m, musicinfos) {
  const result = [];
  
  m = substitution(m);
  
  for (const information of musicinfos) {
    let [start, end, name, melody] = information.split(",");
    const [startHour, startMinute] = start.split(":");
    const [endHour, endMinute] = end.split(":");
    const playTime = (endHour - startHour) * 60 + (endMinute - startMinute);
    let melodyString = "";
    
    melody = substitution(melody);
    
    if (m.length > playTime) {
      continue;
    }
    
    const bae = Math.floor((m.length - 2) / melody.length) + 2;
    
    melodyString = melody.repeat(bae);
    
    if (melodyString.length > playTime) {
      melodyString = melodyString.slice(0, playTime);
    }
    
    if (melodyString.includes(m)) {
      result.push([name, playTime]);
    }
  }
  
  return result.length ? result.sort(([name1, time1], [name2, time2]) => {
    return time2 - time1;
  })[0][0] : "(None)"
}