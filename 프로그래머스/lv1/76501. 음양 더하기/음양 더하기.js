function solution(absolutes, signs) {
    for(let i=0; i <absolutes.length; i++){
        signs[i]? null :absolutes.splice(i,1,absolutes[i]*-1);
    }
  return (absolutes.reduce((pre, cur) => pre+cur, 0));
}