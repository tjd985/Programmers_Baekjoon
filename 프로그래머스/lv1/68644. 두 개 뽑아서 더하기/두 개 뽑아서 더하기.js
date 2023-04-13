function solution(numbers) {
  let arr = [];
  for(let i=0; i<numbers.length-1; i++){
    for(let j=i+1; j<numbers.length; j++){
      arr.push(numbers[i] + numbers[j]);
    }
  }
  
  arr.sort((a,b)=> a-b);
  
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] === arr[i+1]){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}