function solution(s) {
  s = s.replace(/\{/g, "").replace(/\},/g, ",,").replace(/\}/g, "").split(",,");
  let answer = [];
  let arr = Array.from({length:s.length}, index => 0);
  
  s = s.map((index) => index.split(",").map((index) => parseInt(index)));
  
  for(let i=0; i<s.length; i++){
   arr[s[i].length -1] = s[i]; 
  }
  
  for(let i=0; i<arr.length; i++){
    if(i === 0) answer.push(arr[i][i]);
    else{
      arr[i].forEach((index) => {
        if(!answer.includes(index)) answer.push(index);
      });
    }
  }
  
  return answer;
}