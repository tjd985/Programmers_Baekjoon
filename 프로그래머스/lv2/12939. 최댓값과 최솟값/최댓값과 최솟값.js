function solution(s) {
  s = s.split(" ").map((index) => parseInt(index));
  return [Math.min(...s), Math.max(...s)].join(" ");
}