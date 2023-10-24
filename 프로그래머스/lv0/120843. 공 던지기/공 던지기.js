function solution(numbers, k) {
    const sum = (k - 1) * 2;
    const index = sum % numbers.length;
    
    return numbers[index];
}
