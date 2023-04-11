function solution(s) {
    if([...s].length !== 4 && [...s].length !== 6) return false;
    return /[a-z]/ig.test(s)? false : true
}