function solution(arr1, arr2) {
  const result = new Array(arr1.length)
  .fill(0)
  .map(() => {
    return new Array(arr2[0].length).fill(0);
  });
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      for (let k = 0; k < arr2[0].length; k++) {
        result[i][k] += arr1[i][j] * arr2[j][k];
      }
    }
  }
  
  return result;
}