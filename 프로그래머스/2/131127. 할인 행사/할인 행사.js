function solution(want, number, discount) {
  const wantMap = new Map();
  let result = 0;
  
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }
  
  function isMatch(sellMap) {
    for (const wantThing of want) {
      if (wantMap.get(wantThing) !== sellMap.get(wantThing)) {
        return false;
      }
    }
    
    return true;
  }
  
  for (let i = 0; i < discount.length - 9; i++) {
    const saleList = discount.slice(i, i + 10);
    const sellMap = new Map();
    
    saleList.forEach((value) => {
      sellMap.set(value, (sellMap.get(value) || 0) + 1);
    });
    
    if (isMatch(sellMap)) {
      result++;
    }
  }
  
  return result;
}