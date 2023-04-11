function solution(s, n) {
  let arr = s.split("");
  let ascii = arr.map((index) => index.charCodeAt());
  
  let answer = ascii.map((index) => {
    if(index === 32) {
      console.log("공백:", String.fromCharCode(index));
      return String.fromCharCode(index);
    }
    else{
      if(64 < index && index < 91){
        index = index+n;
        if(90 < index) index-=26;
      }
      else if(96 < index && index <123){
        index = index+n;
        if(122 < index) index -= 26;
      }
      return String.fromCharCode(index);
      }
  });
  return answer.join("");
}