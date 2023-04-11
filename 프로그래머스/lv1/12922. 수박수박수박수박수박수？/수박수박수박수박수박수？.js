function solution(n) {
    let answer = [];
    for(let i =1; i<=n; i++){
        i%2 === 0? answer.push("박") : answer.push("수");
    }
    return answer.join("");
}