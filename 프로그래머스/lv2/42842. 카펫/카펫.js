function solution(brown, yellow) {
  let sub = [];
  let a = 0;
  for(let i=1; i<=Math.floor(brown / 2); i++){
    if(yellow%i === 0){
      let answer = 2*(i + yellow/i + 2);
      if(answer === brown){
        let dap = [i, yellow/i].sort((a,b) => b-a);
        dap[0] += 2;
        dap[1] += 2;
        return dap;
        break;
      }
    }
  }
}