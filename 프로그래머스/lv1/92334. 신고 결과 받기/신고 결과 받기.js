function solution(id_list, report, k) {
  let reportList = {}
  let caution = {};
  let banUser = [];
  let answer = [];
  
  report = [...new Set(report)].map((index) => index.split(" "));
  report.forEach((index) => {
    if(reportList[index[0]] === undefined) reportList[index[0]] = [index[1]];
    else reportList[index[0]].push(index[1]);
    if(caution[index[1]] === undefined) caution[index[1]] = 1;
    else caution[index[1]] += 1;
  });
  
  for(let i=0; i<id_list.length; i++){
    if(caution[id_list[i]] >= k) banUser.push(id_list[i]);
  }
  
  for(let i=0; i<id_list.length; i++){
    let cnt = 0;
    if(reportList[id_list[i]] !== undefined){
      reportList[id_list[i]].forEach((index) => {
        if(banUser.includes(index)) cnt++;
      })
    }
    answer.push(cnt);
  }
 
  return answer;
}