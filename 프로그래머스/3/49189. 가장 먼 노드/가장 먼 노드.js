function solution(n, edge) {
  const INFINITY = Infinity;
  const board = {};
  const isVisit = Array(n + 1).fill(false);
  let result = 0;

  isVisit[1] = true;
  
  edge.forEach(([start, end], index) => {
    if (!board[start]) {
      board[start] = [end];
    } else {
      board[start].push(end);
    }
    
    if (!board[end]) {
      board[end] = [start];
    } else {
      board[end].push(start);
    }
  });
  
  const currentRow = Array(n + 1).fill(INFINITY);
  for (const value of board[1]) {
    currentRow[value] = 1;
  }
  
  currentRow[1] = 0;
  
  for (let i = 0; i < n - 1; i++) {
    const pickedIndex = getSmallestNodeIndex();
    const pickedRow = board[pickedIndex];
    
    for (const value of pickedRow) {
      if (currentRow[value] !== INFINITY) {
        continue;
      }
      
      currentRow[value] = currentRow[pickedIndex] + 1;
    }
  }
  
  currentRow.splice(0, 1);

  const maxValue = Math.max(...currentRow);
  
  for (const value of currentRow) {
    if (value === maxValue) {
      result++;
    }
  }
  
  return result;
  
  function getSmallestNodeIndex() {
    let min = INFINITY;
    let minIndex = 0;

    for (let i = 1; i <= n; i++) {
      if (isVisit[i]) {
        continue;
      }

      if (currentRow[i] < min) {
        min = currentRow[i];
        minIndex = i;
      }
    }

    isVisit[minIndex] = true;

    return minIndex;
  }
}