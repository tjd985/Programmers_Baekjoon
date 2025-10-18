function compareWord(word, target) {
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== target[i]) {
            count++;
        }
    }
    
    return count;
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    
    const isVisit = new Array(words.length).fill(false);
    const queue = [[begin, 0, isVisit]];
    
    while (queue.length) {
        const [currentWord, count, visited] = queue.shift();
        
        if (currentWord === target) {
            return count;
        }
        
        words.forEach((word, index) => {
            if (visited[index]) {
                return;
            }
            
            const different = compareWord(currentWord, word);
            const copy = [...visited];
            
            copy[index] = true;
            
            if (different === 1) {
                queue.push([word, count + 1, copy]);
            }
        });
    }
    
    return 0;
}