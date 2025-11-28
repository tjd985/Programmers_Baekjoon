function compareLower(lion, current) {
  for (let i = 10; i >= 0; i--) {
    if (lion[i] !== current[i]) {
      return lion[i] > current[i] ? lion : current;
    }
  }
  
  return current;
}

function solution(n, info) {
    let answer = [-1];
    let pointGap = 0;
    
    function recursion(lionArrow, index, left) {
        if (index === 11) {
            lionArrow[lionArrow.length - 1] = left;
            
            let lionPoint = 0;
            let apeachPoint = 0;
            
            for (let i = 0; i <= 10; i++) {
                if (lionArrow[i] > info[i]) {
                    lionPoint += 10 - i;
                    
                    continue;
                }
                
                if (info[i]) {
                    apeachPoint += 10 - i;
                }
            }
            
            if (lionPoint - apeachPoint > pointGap) {
                pointGap = lionPoint - apeachPoint;
                answer = lionArrow;
            }
            
            if (lionPoint - apeachPoint === pointGap && pointGap) {
                answer = answer.length === 1 ? lionArrow : compareLower(lionArrow, answer);
            }
            
            return;
        }
        
        const apeachArrow = info[index];
        
        if (left > apeachArrow) {
            recursion([...lionArrow, apeachArrow + 1], index + 1, left - (apeachArrow + 1));
        }
        
        recursion([...lionArrow, 0], index + 1, left);
    }
    
    recursion([], 0, n);
    
    return answer;
}