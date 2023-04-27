function solution(keymap, targets) {
  let answer = [];
  
  targets.forEach((index, i) => {
    let arr1 = [];
    index.split("").forEach((index2) => {
      let arr2 = [];
      keymap.forEach((index3) => {
        if(index3.indexOf(index2) !== -1) arr2.push(index3.indexOf(index2)+1);
      });
      
      if(arr2.length !== 0) arr1.push(Math.min(...arr2));
      else arr1.push(-1);
    });
    answer[i] = arr1.includes(-1)? -1 : arr1.reduce((a,b) => a+b, 0);
  });
  return answer;
}
