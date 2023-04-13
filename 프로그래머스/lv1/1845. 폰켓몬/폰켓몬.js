function solution(nums) {
  let choose = nums.length / 2;
  let solution = [...new Set(nums)];
  return solution.length > choose? choose : solution.length
}