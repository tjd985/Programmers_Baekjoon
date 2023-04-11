function solution(array){
  let arr = array.map((index) => index + "").sort((a,b) => (b+a)-(a+b)).join("");
  return arr.split("")[0] === "0"? "0":arr;
}