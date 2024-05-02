function solution(numbers) {
  const answer = [];
  const stack = [];
  let maxNum = 0;
  
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (maxNum <= numbers[i]) {
      maxNum = numbers[i];
      answer.push(-1);

      stack.length = 0;
      stack.push(numbers[i]);
    } else{
      while (true) {
        if(numbers[i] < stack[0]) {
          answer.push(stack[0]);
          stack.unshift(numbers[i]);

          break;
        } else {
          stack.shift();
        }
      } 
    }
  }

  answer.reverse();

  return answer;
}