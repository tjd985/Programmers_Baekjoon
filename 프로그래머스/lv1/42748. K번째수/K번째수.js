function solution(array, com){
  
  function Sort(arr){
    let temp = 0;
    for(let i=arr.length-1; i>0; i--){
      for(let j = 0; j<i; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
  
  let answer = [];
  
  for(let i =0; i<com.length;i++){
    arr = array.slice(com[i][0]-1, com[i][1]);
    Sort(arr);
    answer.push(arr[com[i][2]-1]);
  }
  return answer;
}