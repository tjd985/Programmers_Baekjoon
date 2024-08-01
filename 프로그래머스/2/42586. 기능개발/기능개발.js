function solution(progresses, speeds) {
    const result = [];
    
    while (progresses.length) {
        let count = 0;
        
        for (let i = 0; i < speeds.length; i++) {
            progresses[i] += speeds[i];
        }
        
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        if (count) {
            result.push(count);
        }
    }
    
    return result;
}