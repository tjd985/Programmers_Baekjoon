function solution(phone_number) {
  phone_number = phone_number.split("").map((index)=> parseInt(index));
  
  for(let i=0; i<phone_number.length -4; i++){
    phone_number.splice(i,1,"*");
  }
  return phone_number.join("");
}