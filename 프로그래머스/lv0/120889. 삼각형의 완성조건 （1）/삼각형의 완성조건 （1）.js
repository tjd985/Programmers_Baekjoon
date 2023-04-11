function solution(sides) {
    sides.sort((a,b) => a - b);
    [a,b,c] = [sides[0], sides[1], sides[2]];
    
    if(c-(a+b) >= 0)
        return 2
    else
        return 1
}