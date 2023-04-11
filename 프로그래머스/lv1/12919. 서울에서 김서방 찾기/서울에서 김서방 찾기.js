function solution(seoul) {
    return (`김서방은 ${seoul.findIndex((index)=> /Kim/i.test(index))}에 있다`);
}