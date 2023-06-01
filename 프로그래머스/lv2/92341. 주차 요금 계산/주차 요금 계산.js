function solution(fees, records) {
  const [defaultTime, defaultFee, perMinute, perFee] = [...fees];
  let carNumber = [];
  let answer = [];
  
  records = records.map((index) => {
    return index.split(" ");
  });
  
  for(let i=0; i<records.length; i++){
    let [, number, ] = [...records[i]];
    if(!carNumber.includes(number)) carNumber.push(number);
  }
  
  carNumber.sort((a,b) => a-b);
  
  carNumber.forEach((namba) => {
    let arr = records.filter((index) => {
      return index.includes(namba);
    });
    
    if(arr.length % 2 === 1){
      arr.push(["23:59"]);
    }
    
    let hap = 0;
    
    for(let i=0; i<arr.length-1; i = i+2){
      arr[i][0] = Number(arr[i][0].slice(0,2)) * 60 + Number(arr[i][0].slice(3,5));
      arr[i+1][0] = Number(arr[i+1][0].slice(0,2)) * 60 + Number(arr[i+1][0].slice(3,5));
      hap += arr[i+1][0] - arr[i][0];
    }
    
    if(hap < defaultTime) answer.push(defaultFee);
    else answer.push(defaultFee + (Math.ceil((hap - defaultTime) / perMinute) * perFee));
  });
  
  return answer;
}