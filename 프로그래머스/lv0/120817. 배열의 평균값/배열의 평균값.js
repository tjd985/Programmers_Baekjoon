function solution(numbers) {
    let a = 0;
    numbers.map(function(index, i){
        a += index;
    });
    return a / numbers.length;
}