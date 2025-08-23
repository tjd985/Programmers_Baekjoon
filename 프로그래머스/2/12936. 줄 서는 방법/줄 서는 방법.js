function getFactorial(number) {
  let result = 1;
  
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  
  return result;
}

function solution(n, k) {
  k--;
  const result = [];
  const numberList = new Array(n).fill(0).map((value, index) => index + 1);
  let factorial = getFactorial(n) / n;
  
  while (result.length !== n) {
    const index = Math.floor(k / factorial);
    
    result.push(numberList[index]);
    numberList.splice(index, 1);
    
    k = k % factorial;
    factorial = factorial / numberList.length;
  }
  
  return result;
}