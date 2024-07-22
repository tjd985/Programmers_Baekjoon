function solution(N, road, K) {
  const graph = Array.from({length: N + 1}, (_) => new Array(N + 1).fill(Infinity));
  const isVisit = new Array(N + 1).fill(false);
  
  isVisit[1] = true;
  
  road.forEach(([start, end, weight]) => {
    graph[start][start] = 0;
    graph[end][end] = 0;
    graph[start][end] = graph[start][end] ? Math.min(graph[start][end], weight) : weight;
    graph[end][start] = graph[end][start] ? Math.min(graph[end][start], weight) : weight;
  });
  
  function getSmallestIndex() {
    let minIndex = 0;
    let minValue = Infinity;
    
    for (let i = 1; i < graph[1].length; i++) {
      if (isVisit[i]) {
        continue;
      }
      
      if (minValue > graph[1][i]) {
        minValue = graph[1][i];
        minIndex = i;
      }
    }
    
    return minIndex;
  }
  
  function doDijkstra() {
    for (let i = 1; i < graph[1].length; i++) {
      const currentIndex = getSmallestIndex();
      
      isVisit[currentIndex] = true;
      
      for (let j = 1; j <= N; j++) {
        if (isVisit[j]) {
          continue;
        }
        
        if (graph[1][currentIndex] + graph[currentIndex][j] < graph[1][j]) {
          graph[1][j] = graph[1][currentIndex] + graph[currentIndex][j];
        }
      }
    }
  }
  
  doDijkstra();
  
  return graph[1].filter((value) => value <= K).length;
}