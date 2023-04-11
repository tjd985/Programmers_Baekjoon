function solution(s) {
  let arr = [...s];
  let temp = 0;
  
  for(let j=arr.length-1; j>0; j--){
    for(let i=0; i<j; i++){
      if(arr[i]>arr[i+1]){
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr.reverse().join("");
}