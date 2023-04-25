function solution(s, skip, num) {
  let skipArr = skip.split("").map((index, i) => skip.charCodeAt(i));
  
  let sArr = s.split("").map((index,i) => {
    let cnt = 0;
    let ascii = s.charCodeAt(i);
    while(cnt < num){
      ascii += 1;
      ascii =  ascii > 122? ascii - 26 : ascii;
      if(!skipArr.includes(ascii)) cnt++;  
    }
    return String.fromCharCode(ascii);
  });
  return sArr.join("");
}