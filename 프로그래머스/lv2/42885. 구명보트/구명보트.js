function solution(people, limit) {
  people = people.sort((a,b) => a-b);
  let cnt = 0;
  while(people.length > 0){
    if(people[people.length-1] > limit - people[0]){
      people.pop();
    }
    else {
      people.pop();
      people.shift();
    }
    cnt++;
  }
  return cnt;
}