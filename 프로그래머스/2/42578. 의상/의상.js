function solution(clothes) {
  const clothesObj = {};
  let result = 1;
  
  for (const cloth of clothes) {
    const [item, type] = cloth;
    
    clothesObj[type] = [...clothesObj[type] || [], item];
  }
  
  for (const type in clothesObj) {
    result *= clothesObj[type].length + 1;
  }
  
  return result - 1;
}