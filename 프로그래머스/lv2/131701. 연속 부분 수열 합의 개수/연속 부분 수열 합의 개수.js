function solution(elements) {
  let answer = [];
  let cnt = 0;
  const doubleElements = elements.concat(elements);
  
  for(let i=0; i<elements.length; i++){
    for(let j=1; j<elements.length; j++){
      answer.push(doubleElements.slice(i, i+j).reduce((a,b) => a+b, 0));
    }
  }
  answer.push(elements.reduce((a,b) => a+b, 0));
  return [...new Set(answer)].length;
}