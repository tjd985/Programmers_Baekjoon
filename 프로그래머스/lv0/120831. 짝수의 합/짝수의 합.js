function solution(n) {
    let i;
    let m = 0;
    for(i = 0; i <= n; i+=2){
        m = m + i;
    }
    return m;
}