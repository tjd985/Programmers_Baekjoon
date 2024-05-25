function solution(chicken) {
  let result = 0;
  let coupon = chicken;
  
  if (chicken < 10) {
    return 0;
  }
  
  while (coupon >= 10) {
    const freeChicken = Math.floor(coupon / 10);
    
    coupon = (coupon - freeChicken * 10) + freeChicken;
    result += freeChicken;
  }
  
  return result;
}