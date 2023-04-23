function solution(babbling) {
  let arr = ["aya", "ye", "woo", "ma"];
  let cnt = 0;
  
  babbling.forEach((index) => {
    for(let i=0; i<4; i++){
      if(index.includes(arr[i].repeat(2))) break;
      index = index.replaceAll(arr[i], "0");
    }
    if([...new Set(index.split(""))].join("") === "0") cnt++;
  });
  return cnt;
}
