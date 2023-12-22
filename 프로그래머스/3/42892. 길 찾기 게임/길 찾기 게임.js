function solution(nodeinfo) {
  const nodes = nodeinfo
  .map((node, index) => [...node, index + 1])
  .sort((a,b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]);
  
  const root = new BinaryTree(nodes[0]);
  
  for (let i = 1; i < nodes.length; i++) {
    root.insert(nodes[i]);
  }
  
  const preorderList = [];
  root.preorder((value) => {
    preorderList.push(value);
  });
  
  const postorderList = [];
  root.postorder((value) => {
    postorderList.push(value);
  });
  
  return[preorderList, postorderList];
}

class BinaryTree {
  constructor(node) {
    const [x, y, value] = node;
    
    this.value = value;
    this.x = x;
    this.left = null;
    this.right = null;
  }
  
  insert(node) {
    const [x, y, value] = node;
    
    if (this.x < x) {
      if (!this.right) {
        this.right = new BinaryTree(node);
      }
      
      this.right.insert(node);
    }
    
    if (this.x > x) {
      if (!this.left) {
        this.left = new BinaryTree(node);
        
        return;
      }
      
      this.left.insert(node);
    }
  }
  
  preorder(fn) {
    fn(this.value);
    
    if (this.left) {
      this.left.preorder(fn);
    }
    
    if (this.right) {
      this.right.preorder(fn); 
    }
  }
  
  postorder(fn) {
    if (this.left) {
      this.left.postorder(fn);
    }
    
    if (this.right) {
      this.right.postorder(fn); 
    }
    
    fn(this.value);
  }
}
