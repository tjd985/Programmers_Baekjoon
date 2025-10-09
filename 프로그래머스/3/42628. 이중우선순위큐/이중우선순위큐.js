function addValue(value) {
  // 노드가 없을 경우
  if (this.value === null) {
    this.value = value;
    return;
  }
  
  if (value > this.value) {
    if (!this.right) {
      const newNode = new Node(value);
      newNode.parent = this;
      this.right = newNode;
      return;
    }
    this.right.addValue(value);
    return;
  }
  
  if (!this.left) {
    const newNode = new Node(value);
    newNode.parent = this;
    this.left = newNode;
    return;
  }
  this.left.addValue(value);
}

function removeMinValue() {
  // 빈 트리 체크
  if (this.value === null) return;
  
  if (!this.left) {
    // root 노드를 삭제하는 경우
    if (!this.parent) {
      if (this.right) {
        // 오른쪽 자식이 있으면 그 값을 root로
        this.value = this.right.value;
        this.left = this.right.left;
        const oldRight = this.right.right;
        this.right = oldRight;
        
        if (this.left) this.left.parent = this;
        if (this.right) this.right.parent = this;
      } else {
        // 자식이 없으면 빈 트리로
        this.value = null;
      }
      return;
    }
    
    this.parent.left = this.right;
    if (this.right) {
      this.right.parent = this.parent;
    }
    return;
  }
  
  this.left.removeMinValue();
}

function removeMaxValue() {
  // 빈 트리 체크
  if (this.value === null) return;
  
  if (!this.right) {
    // root 노드를 삭제하는 경우
    if (!this.parent) {
      if (this.left) {
        // 왼쪽 자식이 있으면 그 값을 root로
        this.value = this.left.value;
        this.right = this.left.right;
        const oldLeft = this.left.left;
        this.left = oldLeft;
        
        if (this.left) this.left.parent = this;
        if (this.right) this.right.parent = this;
      } else {
        // 자식이 없으면 빈 트리로
        this.value = null;
      }
      return;
    }
    
    this.parent.right = this.left;
    if (this.left) {
      this.left.parent = this.parent;
    }
    return;
  }
  
  this.right.removeMaxValue();
}

function getMinValue() {
  if (this.value === null) return null;
  if (!this.left) return this.value;
  return this.left.getMinValue();
}

function getMaxValue() {
  if (this.value === null) return null;
  if (!this.right) return this.value;
  return this.right.getMaxValue();
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

Node.prototype.addValue = addValue;
Node.prototype.removeMinValue = removeMinValue;
Node.prototype.removeMaxValue = removeMaxValue;
Node.prototype.getMinValue = getMinValue;
Node.prototype.getMaxValue = getMaxValue;

function solution(operations) {
  const root = new Node();
  
  operations.forEach((operator) => {
    const [char, num] = operator.split(" ");
    
    switch (char) {
      case 'I':
        root.addValue(Number(num));
        
        break;
        
      case 'D':
        if (num === '1') {
          root.removeMaxValue();
          
          break;
        }
        
        root.removeMinValue();
    }
  });

  return [root.getMaxValue() ?? 0, root.getMinValue() ?? 0];
}