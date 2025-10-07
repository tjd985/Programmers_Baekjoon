function formatTime(time) {
  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString();
  
  return `${hour.padStart(2, 0)}:${minute.padStart(2, 0)}`;
}

function solution(n, t, m, timetable) {
  const busTime = new Date(2025, 0, 1, 9, 0);
  const currentBus = [];
  
  const timeTable = timetable
    .map((time) => {
      const [hour, minute] = time.split(":").map(Number);
      
      return new Date(2025, 0, 1, hour, minute);
    })
    .sort((a, b) => b - a);
  let lastCrewTime = null;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!timeTable.length) {
        return formatTime(busTime);
      }
      
      const crewTime = timeTable.pop();
      
      if (crewTime > busTime) {
        timeTable.push(crewTime);
        currentBus.push(null);
        
        break;
      }
      
      lastCrewTime = crewTime;
      currentBus.push(crewTime);
    }
    
    if (i !== n - 1) {
      busTime.setMinutes(busTime.getMinutes() + t);
    }
  }
  
  currentBus.filter((current) => !!current);
  
  if (currentBus.filter((current) => !!current).length === n * m) {
    const lastCrew = currentBus.pop();
    
    lastCrew.setMinutes(lastCrew.getMinutes() - 1);
    
    return formatTime(lastCrew);
  }
  
  let answer = busTime;
  
  if (lastCrewTime && currentBus.pop() !== null) {
    lastCrewTime.setMinutes(lastCrewTime.getMinutes() - 1);
    
    answer = lastCrewTime;
  }
  
  return formatTime(answer);
}