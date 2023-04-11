function solution(num_list) {
  let a = 0;
  let b = 0;
  let arr = [];
  
  for(let i =0; i < num_list.length; i+=1){
      if(num_list[i] % 2 == 1)
          a+=1;
      else
          b+=1;
  }
  return arr=[b,a];
}