function solution(myString) {
  const myStringList = myString.split("");
  
  return myStringList.map((char) => char.toUpperCase()).join("");
}