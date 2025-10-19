function solution(n, money) {
  const moneyList = money.sort();
  const dp = new Array(n + 1).fill(0);
  const MOD = 1000000007;
  
  dp[0] = 1;
  
  for (const money of moneyList) {
    for (let i = money; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - money]) % MOD;
    }
  }
  
  return dp[n];
}