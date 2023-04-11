function solution(my_string, n) {
    let arr = [];
    my_string.split("").forEach(function(index){
for(let i=0; i<n; i++){
 arr.push(index);
}});
    return arr.join("");
}