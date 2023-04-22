function solution(n, lost, left) {
  let arr = Array(n).fill(1);
  arr.unshift(1);
  
  arr = arr.map((index,i) => {
    if(left.includes(i)){
      index += 1;
      if(lost.includes(i)) index -= 1;
    }
    else if(lost.includes(i)) index -= 1;
    
    return index;
  });
  
  for(let i=1; i<arr.length; i++){
    if(arr[i] === 0){
      if(arr[i-1] === 2){
        arr[i] = 1;
        arr[i-1] = 1;
      }
      else if(arr[i+1] === 2){
        arr[i] = 1;
        arr[i+1] = 1;
      }
    }
  }
  return arr.filter((index) => index > 0).length -1;
}