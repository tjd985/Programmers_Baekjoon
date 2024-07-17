class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function solution(n, wires) {
  const isVisit = Array.from({length: n + 1}, (_) => false);
  const route = {};
  const childCount = {};
  const halfValue = Math.floor(n / 2);
  
  for (const wire of wires) {
    const [from, to] = wire;
    
    route[from] = [...route[from] || [], to];
    route[to] = [...route[to] || [], from];
  }
  
  function searchTree(currentNode) { 
    isVisit[currentNode.value] = true;
    
    for (const child of route[currentNode.value]) {
      if (isVisit[child]) {
        continue;
      }
      
      const newNode = new Node(child);
      
      currentNode.children.push(newNode);
      
      childCount[currentNode.value] = (childCount[currentNode.value] || 1) + searchTree(newNode);
    }
    
    childCount[currentNode.value] = childCount[currentNode.value] ?
      childCount[currentNode.value] : 1;
    
    return childCount[currentNode.value];
  }
  
  const headNode = new Node(1);
  
  searchTree(headNode);
  
  let closestCount = 0;
  
  for (const key in childCount) {
    const count = childCount[key];
    
    closestCount = Math.abs(halfValue - count) <= Math.abs(halfValue - closestCount) ? count : closestCount;
  }
  
  return Math.abs(closestCount - (n - closestCount));
}