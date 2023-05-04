function solution(n, words) {
  let num = 0;
  let stack = [];
  let answer = [];
  
  words.forEach((index,i) => {
    if((i > 0 && index[0] !== words[i-1][words[i-1].length-1]) || stack.includes(index)) {
      if(num === 0) num = i+1;
    }
    else stack.push(index);
  });
  answer[0] = num % n === 0? n : num % n;
  answer[1] = Math.ceil(num / n);
  
  return num === 0? [0,0] : answer;
}