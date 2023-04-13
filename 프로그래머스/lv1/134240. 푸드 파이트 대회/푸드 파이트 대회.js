function solution(food) {
  let solution = "0";
  
  for(let i=food.length-1; i>0; i--){
    if(food[i] >= 2){
      food[i]%2 === 0? null : food[i] = food[i]-1;
      solution = solution.padStart(solution.length + food[i]/2, i).padEnd(solution.length + food[i], i);
    }
  }
  return solution;
}
