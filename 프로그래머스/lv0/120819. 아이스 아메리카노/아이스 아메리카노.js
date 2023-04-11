function solution(money) {
    var answer = [];
    let cup = Math.floor(money / 5500);
    let rest = money - 5500 * cup;
    answer.push(cup, rest)
    return answer;
}