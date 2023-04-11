function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>{
        return b-a;
    });
    var n=citations.length;
    for(var i=0 ; i<n; ++i) {
        if(i+1<=citations[i]) {
            ++answer;
        }
    }
    return answer;
}