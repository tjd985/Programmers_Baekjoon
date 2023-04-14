function solution(a, b) {
  let date = new Date(`2016-${a}-${b}`);
  switch(date.getDay()){
    case 0: return "SUN";
    case 1: return "MON";
    case 2: return "TUE";
    case 3: return "WED";
    case 4: return "THU";
    case 5: return "FRI";
    case 6: return "SAT";
  }
}