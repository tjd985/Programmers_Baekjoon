function solution(record) {
  let answer = [];
  let nickName = {};
  
  for(let i=record.length-1; i>=0; i--){
    const [state, id, nick] = [...record[i].split(" ")];
    
    if(!nickName[id]){
      if(nick){
        nickName[id] = nick;
      }
    }
  }
  
  return record.map((index) => {
    const [state, id, ] = [...index.split(" ")];
    if(state === "Enter") return `${nickName[id]}님이 들어왔습니다.`;
    else if(state === "Leave") return `${nickName[id]}님이 나갔습니다.`;
  }).filter((index) => index !== undefined);
}