function solution(n) {
    let i = 1;
    while(true){
        if((7*i / n) >= 1){
            return i;
            break;
        }
        else
            i+=1;
    }
}