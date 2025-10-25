function solution(k, ranges) {
    const areaValue = [];
    
    while (k !== 1) {
        const beforeK = k;
        k = k % 2 === 0 ? k / 2 : k * 3 + 1;
        
        areaValue.push((beforeK + k) / 2);
    }
    
    return ranges.map(([a, b]) => {
        const start = a;
        const end = areaValue.length + b;
        
        if (end < start) {
            return -1;
        }
        
        let sum = 0;
        
        for (let i = start; i < end; i++) {
            sum += areaValue[i];
        }
        
        return sum;
    });
}