function solution(my_string) {
  let arr = ["e","u","i","o","a"];
  let str = [...my_string];
  
  for(let i = 0; i< str.length; i++){
    if(arr.includes(str[i]) === true){
      str.splice(i,1);
      i -= 1;
    }
  }
   return str.join(""); 
}