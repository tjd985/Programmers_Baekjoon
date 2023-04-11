function solution(sizes) {
  let arr = [];
  for(let i=0; i<sizes.length; i++){
    for(let j=0;j<2;j++){
      arr.push(sizes[i][j]);
    }
  }
  
  let max = Math.max(...arr);
  let min = Math.max(...sizes.map((index) => {
    return Math.min(...index);
  }));
  return max*min;
}