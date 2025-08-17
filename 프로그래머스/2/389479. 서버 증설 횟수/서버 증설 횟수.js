function solution(players, m, k) {
  const runningServerList = new Array(24).fill(0);
  
  return players.reduce((scaleCount, player, index) => {
    const runningServer = runningServerList[index];
    const maximumPlayer = Math.max(m * (runningServer + 1) - 1, m - 1);
    const increaseServer = Math.max(Math.ceil((player - maximumPlayer) / m), 0);
    
    for (let i = index; i < index + k; i++) {
      runningServerList[i] += increaseServer;
    }
    
    return scaleCount + increaseServer;
  }, 0);
}