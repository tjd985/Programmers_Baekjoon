function solution(s) {
  const numberWord = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  
  while (!Number(s)) {
    for (const numberString in numberWord) {
      if (s.includes(numberString)) {
        s = s.replaceAll(numberString, numberWord[numberString]);
      }
    }
  }
  
  return Number(s);
}