function solution(n) {
    n = String(n).split("").map((index) => parseInt(index));
    return parseInt(n.sort((a,b) => b-a).join("")); 
}