function solution(n) {
    let arr = [];
    for(let i = 0; i<=n; i+=1){
        if(i%2 === 1)
            arr.push(i);
    }
    return arr;
}