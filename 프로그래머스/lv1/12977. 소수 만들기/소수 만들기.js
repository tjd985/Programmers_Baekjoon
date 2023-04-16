function solution(arr){
  let hap = [];
  for(let i=0; i<arr.length-2; i++){
    for(let j=i+1; j<arr.length-1; j++){
      for(let m=j+1; m<arr.length; m++){
        let plus = arr[i]+arr[j]+arr[m];
        let cnt = 0;
        for(let k=1; k<=plus; k++){
          if(cnt === 3) break;
          else if(plus%k === 0) cnt++;
        }
        if(cnt === 2) hap.push(plus);
      }
    }
  }
  return hap.length;
}