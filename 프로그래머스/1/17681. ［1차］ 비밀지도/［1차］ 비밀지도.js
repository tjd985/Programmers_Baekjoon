function solution(n, arr1, arr2) {
  return Array(n).fill("").map((value, index) => {
     const binary1 = arr1[index].toString(2);
     const binary2 = arr2[index].toString(2);
     const formatedRow1List = binary1.padStart(n, 0);
     const formatedRow2List = binary2.padStart(n, 0);
     
     for (let i = 0; i < n; i++) {
       const isWall = !!(Number(formatedRow1List[i]) || Number(formatedRow2List[i]));
       
       value += isWall ? "#" : " ";
     }
     
     return value;
   });
}