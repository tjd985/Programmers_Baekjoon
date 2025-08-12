function solution(rsp) {
    const map = {
        '0': '5',
        '2': '0',
        '5': '2',
    }
    
    return rsp.split("").reduce((acc, cur) => acc + map[cur], '');
}