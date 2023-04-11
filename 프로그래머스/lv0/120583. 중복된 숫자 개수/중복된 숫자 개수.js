function solution(array, n) {
    let answer = 0;
    array.forEach(function(i){
 if(i === n) answer++;})
    return answer;
}