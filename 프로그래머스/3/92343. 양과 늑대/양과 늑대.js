function solution(info, edges) {
  const tree = {};
  let maxSheep = 0;
  
  edges.forEach(([parent, child]) => {
    if (!tree[parent]) {
      tree[parent] = [];
    }
    
    tree[parent].push(child);
  });
  
  const list = [0, 1, 0, [...tree[0]]];
  
  function DFS(list) {
    const [currentNode, sheep, wolf, queue] = list;
      
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      
      if (info[node] === 1) {
        if (wolf + 1 < sheep) {
          const copiedQueue = [...queue];
            
          copiedQueue.splice(i, 1);
          
          if (tree[node]) {
            DFS([node, sheep, wolf + 1, [...copiedQueue, ...tree[node]]]);
          } else {
            DFS([node, sheep, wolf + 1, [...copiedQueue]]);
          }
        }
      }
      
      if (info[node] === 0) {
        const copiedQueue = [...queue];
       
        copiedQueue.splice(i, 1);

        if (tree[node]) {
          DFS([node, sheep + 1, wolf, [...copiedQueue, ...tree[node]]]);
        } else {
          DFS([node, sheep + 1, wolf, [...copiedQueue]]);
        }
      }
    }
    
    if (sheep > maxSheep) {
      maxSheep = sheep;
    }
  }
  
  DFS(list);
  
  return maxSheep;
}