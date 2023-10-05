function solution(my_string) {
  my_string = my_string.split("");
  let string = "";
  const result = [];
  let num = 0;
  
  for(let i = 0; i < my_string.length; i++){
    if(isNaN(Number(my_string[i]))){
      result === "" ?  null : result.push(Number(string));
      string = "";
      continue;
    }
    string += my_string[i];
    if(i === my_string.length - 1){
      result.push(Number(string));
    }
  }
  for(const value of result){
    num += value;
  }
  
  return num;
}