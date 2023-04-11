function solution(list){
  let arr = []
  arr.length = 200;
  arr.fill(0);
  let cnt = 0;

  for(let i = 0; i<3;i++){
    let left = list[i][0];
    let right = list[i][1];
    
    for(let j = left; j<right; j++){
      arr[j+100] += 1;
    }
  }
  arr.forEach((index)=>{
    if(index > 1) cnt++;
  });
  return cnt;
}