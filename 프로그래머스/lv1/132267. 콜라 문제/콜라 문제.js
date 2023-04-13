function solution(a, b, n) {
  let num = 0;
  
  while(n >= a){
    if(n%a === 0){
      n = Math.floor(n / a) * b;
      num += n;
    }
    else{
      num += (Math.floor(n / a) * b);
      n = Math.floor(n / a) * b + (n % a);
    }
  }
  return num;
}
