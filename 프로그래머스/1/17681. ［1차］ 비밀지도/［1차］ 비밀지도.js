function solution(n, arr1, arr2) {
  return Array(n).fill("").map((value, index) => {
     const binary1 = arr1[index].toString(2);
     const binary2 = arr2[index].toString(2);
     const zeroString1 = "0".repeat(n - binary1.length);
     const zeroString2 = "0".repeat(n - binary2.length);
     const formatedRow1List = (zeroString1 + binary1).split("").map(Number);
     const formatedRow2List = (zeroString2 + binary2).split("").map(Number);
     
     for (let i = 0; i < n; i++) {
       const isWall = !!(formatedRow1List[i] || formatedRow2List[i]);
       
       value += isWall ? "#" : " ";
     }
     
     return value;
   });
}