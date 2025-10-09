function solution(operations) {
    const queue = [];
    
    for (const operator of operations) {
        const [char, num] = operator.split(" ");
        
        if (char === 'I') {
            const targetNumber = Number(num);
            
            if (queue.length) {
                const index = queue.findIndex((value) => targetNumber < value);
              
                if (index === -1) {
                  queue.push(targetNumber);
                } else {
                  queue.splice(index, 0, targetNumber);
                }
            }
          
            if (!queue.length) {
                queue.push(targetNumber);
            }
        }
        
        if (char === 'D') {
            if (num === '-1') {
                queue.shift();
            }
            
            if (num === '1') {
                queue.pop();
            }
        }
    }
    
    return queue.length ? [queue[queue.length - 1], queue[0]] : [0, 0];
}