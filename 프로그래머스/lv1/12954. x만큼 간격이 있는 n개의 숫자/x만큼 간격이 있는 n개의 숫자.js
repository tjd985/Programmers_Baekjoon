function solution(x, n) {
    let arr = [];
    let a = x;
    
    for(let i = 0; i<n;i++){
        arr.push(a);
        a += x;
    }
    return arr;
}