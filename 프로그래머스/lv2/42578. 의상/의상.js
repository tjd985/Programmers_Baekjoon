function solution(clothes) {
  const clothesObj = {};
  
  clothes.forEach((value) => {
    clothesObj[value[1]] = (clothesObj[value[1]] || "")+value[0]+" ";
  });
  let result = 1;
  for(let key in clothesObj){
    clothesObj[key] = clothesObj[key].split(" ");
    result *= clothesObj[key].length;
  }
  return result-1;
}