function caclulate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        
        case '-':
            return num1 - num2;
            
        case '*':
            return num1 * num2;
    }
}

function solution(expression) {
    const expressionList = [];
    const OPERATOR_LIST = ['+', '-', '*'];
    
    let current = '';
    let answer = 0;
    
    for (let i = 0; i < expression.length; i++) {
        const num = Number(expression[i]);
        
        if (isNaN(num)) {
            expressionList.push(current);
            expressionList.push(expression[i]);
            current = '';
            
            continue;
        }
        
        current += expression[i];
        
        if (i === expression.length - 1) {
            expressionList.push(current);
        }
    }
    
    function dfs(list, isVisit, depth) {
        if (depth === 3) {
            answer = Math.max(Math.abs(list[0]), answer);
            
            return;
        }
        
        for (let i = 0; i < 3; i++) {
            if (isVisit[i]) {
                continue;
            }
            
            const copyList = [...list];
            const operator = OPERATOR_LIST[i];
            
            for (let j = 0; j < copyList.length; j++) {
                if (operator === copyList[j]) {
                    const left = Number(copyList[j - 1]);
                    const right = Number(copyList[j + 1]);
                    const result = caclulate(left, operator, right);

                    copyList.splice(j - 1, 3, result);
                    
                    j = j - 1;
                }
            }
            
            isVisit[i] = true;
            
            dfs(copyList, isVisit, depth + 1);
            
            isVisit[i] = false;
        }
    }
    
    dfs(expressionList, [false, false, false], 0);
    
    return answer;
}