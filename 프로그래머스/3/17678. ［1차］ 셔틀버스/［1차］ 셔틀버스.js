function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  
  return hours * 60 + minutes;
}

function solution(n, t, m, timetable) {
  let answer = formatTime("09:00");
  const timeTable = timetable.map(formatTime).sort((a, b) => a - b);
  
  for (let i = 0; i < n; i++) {
    const boardingCrew = timeTable.filter((crew) => crew <= answer).length;
    
    if (i === n - 1) {
      if (boardingCrew >= m) {
        answer = timeTable[m - 1] - 1;
      }
      
      break;
    }
    
    answer += t;
    timeTable.splice(0, Math.min(m, boardingCrew));
  }
  
  return `${Math.floor(answer / 60)}`.padStart(2, 0) + ':' + `${answer % 60}`.padStart(2, 0);
}