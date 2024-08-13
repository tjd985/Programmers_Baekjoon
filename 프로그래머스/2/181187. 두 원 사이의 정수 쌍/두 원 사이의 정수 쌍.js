function solution(r1, r2) {
  let result = 0;
  let minY = 0;

  for(let x = 1; x <= r2; x++){
    const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));

    if(r1 > x){
      minY = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
    }
    else{
      minY = 0;
    }

    result += (maxY - minY + 1);
  }
  
  return result * 4;
}