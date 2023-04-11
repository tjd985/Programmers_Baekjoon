function solution(price, money, count) {
    let need = 0
    for(let i =1; i<=count; i++){
        need += price*i
    }
    if(money >= need) return 0;
    else return need - money;
}