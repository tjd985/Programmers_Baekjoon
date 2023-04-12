function solution(string, n) {
  let arr = string.map((index) => index[n]+index);
  
  for(let i=0; i<arr.length-1; i++){
    let min = arr[i];
    let index = i;
    for(let j=i; j<arr.length; j++){
      if(min > arr[j]){
        min = arr[j];
        index = j;
      }
    }
    
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  let solution = arr.map((index) => index.slice(1,index.length));
  return solution;
}