function solution(today, terms, privacies) {
  let term = {};
  let answer = [];
  
  today = parseInt(today.split(".").join(""));
  terms = terms.map((index) => index.split(" "));
 
  for(let i=0; i<terms.length; i++){
    term[terms[i][0]] = parseInt(terms[i][1]);
  }
  
  privacies = privacies.map((index) => index.replace(/\s/g, ".").split("."));
  privacies = privacies.map((index) => {
    return index.map((index2, i) => {
      if(i < 3) index2 = parseInt(index2);
      return index2;
    });
  });
  
 privacies = privacies.map((index, i) => {
   let idx = term[index[3]];
   index[1] = index[1] + idx;
   while(index[1] > 12){
     index[1] -= 12;
     index[0] += 1;
   }
   
   if(index[1] < 10) index[1] = "0" + String(index[1]);
   if(index[2] < 10) index[2] = "0" + String(index[2]);
   
   return [parseInt(index.splice(0,3).join("")), i+1];
 });
  
  answer = privacies.filter((index) => {
    return index[0] <= today;
  });
  
  return answer.map((index) => index[1]);
}
