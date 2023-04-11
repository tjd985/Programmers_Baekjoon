function solution(n) {
    let arr = [];
    if(n === 0){
        return 0;
    }
    for(let i =1; i<=n; i++){
        if(n%i == 0){
            arr.push(i);
        }
    }
    return arr.reduce((n,m) => n+m);
}