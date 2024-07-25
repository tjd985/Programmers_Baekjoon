function solution(data, col, row_begin, row_end) {
  const result = [];
  
  data.sort((row1, row2) => {
    if (row1[col - 1] === row2[col - 1]) {
      return row2[0] - row1[0];
    }
    
    return row1[col - 1] - row2[col - 1];
  });
  
  for (let i = row_begin; i <= row_end; i++) {
    const currentRow = data[i - 1];
    
    result.push(currentRow.reduce((acc, cur) => acc + cur % i, 0));
  }
  
  return result.reduce((acc, cur) => acc ^ cur, 0);
}