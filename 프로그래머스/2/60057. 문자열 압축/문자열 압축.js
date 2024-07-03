function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let sentence = "";
    let index = 0;

    while(index < s.length) {
      let count = 1;

      while (s.slice(index, index + i) === s.slice(index + i, index + i + i)) {
        count++;
        index += i;
      }

      if(count > 1) {
        sentence += count;
      }

      const str = s.slice(index, index + i);

      sentence = sentence + str;
      index += i;
    }

    answer = Math.min(answer, sentence.length); 
  }

  return answer;
}