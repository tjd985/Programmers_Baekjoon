function solution(n, computers) {
    const isVisit = new Array(n).fill(false);
    let answer = 0;
    
    function search(computer) {
        const queue = [computer];
        
        while (queue.length) {
            const current = queue.shift();
            isVisit[current] = true;
            
            for (let i = 0; i < n; i++) {
                const isConnect = computers[current][i];

                if (isVisit[i] || !isConnect) {
                    continue;
                }

                queue.push(i);
            }
        }
    }

    computers.forEach((network, computer) => {
        if (isVisit[computer]) {
            return;
        }
        
        search(computer);
        
        answer++;
    });
    
    return answer;
}