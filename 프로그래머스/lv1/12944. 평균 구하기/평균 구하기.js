function solution(arr) {
    let a = arr.reduce((n,m) => n+m);
    return a/arr.length;
}