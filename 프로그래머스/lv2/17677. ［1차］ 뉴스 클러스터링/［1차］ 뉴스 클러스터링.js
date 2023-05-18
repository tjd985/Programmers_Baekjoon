function solution(str1, str2) {
  str1 = str1.split("").map((index) => index.toUpperCase()).join("");
  str2 = str2.split("").map((index) => index.toUpperCase()).join("");
  
  let arr1 = [];
  let arr2 = [];
  
  for(let i=0; i<str1.length-1; i++){
    let a = str1.slice(i, i+2);
    if(/[A-Z]/.test(a[0]) && /[A-Z]/.test(a[1])) arr1.push(a);
  }
  
  for(let i=0; i<str2.length-1; i++){
    let b = str2.slice(i, i+2);
    if(/[A-Z]/.test(b[0]) && /[A-Z]/.test(b[1])) arr2.push(b);
  }
  
  if(arr1.length === 0 && arr2.length === 0) return 65536;
  
  let arr1_temp = [];
  let AuB = [];
  AuB = AuB.concat(arr1);
  arr1_temp = arr1_temp.concat(arr1);
  
  for(let index of arr2){
    if(!arr1_temp.includes(index)) AuB.push(index);
    else {
      let i = arr1_temp.findIndex((word) => word === index);
      arr1_temp.splice(i,1);
    }
  }
  
  let AnB = [];
  for(let index of arr2){
    if(arr1.includes(index)){
      AnB.push(index);
      arr1.splice(arr1.findIndex((word) => word === index), 1);
    }
  }
    
  return Math.floor(AnB.length / AuB.length * 65536);
}