function solution(array) {
    const max = Math.max(...array);
    const index = array.findIndex((value) => value === max);
    
    return [max, index];
}