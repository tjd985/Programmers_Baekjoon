function formatToSecond(timeString) {
  const [minutes, seconds] = timeString.split(":").map(Number);
  
  return minutes * 60 + seconds;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const OPENING_START = formatToSecond(op_start);
  const OPENING_END = formatToSecond(op_end);
  const VIDEO_START = 0;
  const VIDEO_END = formatToSecond(video_len);
  
  function alignTime(current) {
    if (OPENING_START <= current && current <= OPENING_END) {
      return OPENING_END;
    }
    
    if (current < VIDEO_START) {
      return VIDEO_START;
    }
    
    if (current > VIDEO_END) {
      return VIDEO_END;
    }
    
    return current;
  }
  
  function executeCommand(current, command) {
    if (command === 'next') {
      return current + 10;
    }
    
    return current - 10;
  }
  
  let current = formatToSecond(pos);
  
  for (const command of commands) {
    current = alignTime(current);
    current = executeCommand(current, command);
    current = alignTime(current);
  }
  
  const minute = String(Math.floor(current / 60)).padStart(2, '0');
  const second = String(current % 60).padStart(2, '0');
  
  return `${minute}:${second}`;
}