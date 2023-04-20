function solution(lotto, win_nums) {
  let result = {
    6: "1",
    5: "2",
    4: "3",
    3: "4",
    2: "5",
    1: "6",
    0: "6",
  };
  
  let erase = 0;
  let right = 0;
  let cnt = [];
  let answer = [];
  
  lotto.forEach((index) => {
    if(index === 0) erase++;
  });
  lotto.forEach((index) => {
    if(win_nums.includes(index)) right++;
  });
  
  for(let i=0; i<=erase; i++){
    cnt.push(right+i);
  }
  
  answer.push(parseInt(result[cnt[cnt.length-1]]));
  answer.push(parseInt(result[cnt[0]]));
  
  return answer;
}