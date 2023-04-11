function solution(array, height) {
    let answer = array.filter((key) => key > height);
    return answer.length;
}