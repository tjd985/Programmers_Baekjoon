function solution(n, m) {
    let arr = [];
    let a = n, b = m;
    
    while (m > 0)
    {
        let tmp = n;
        n = m;
        m = tmp%m;
    }
    arr.push(n);
    arr.push(a*b/n);
    return arr;
    
}