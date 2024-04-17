function solution(word) {
  const characterList = ["A", "E", "I", "O", "U"];
  let count = 0;
  let isFind = false;
  
  function DFS(depth, currentString) {
    if (currentString === word) {
      return count;
    }
    
    if (depth === 5) {
      return;
    }
    
    for (const character of characterList) {
      count++;
      
      const result = DFS(depth + 1, currentString + character);
      
      if (result) {
        return result;
      }
    }
  }
  
  return DFS(0, "");
}