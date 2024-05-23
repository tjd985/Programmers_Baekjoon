function solution(book_time) {
  const times = [];
  
  book_time.forEach(([start, end]) => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    
    times.push([startHour * 60 + startMinute, "start"]);
    times.push([endHour * 60 + endMinute + 10, "end"]);
  });
  
  console.log(times);
  
  times.sort(([time1, type1], [time2, type2]) => {
    if (time1 === time2) {
      return type1 === "end" ? -1 : 1;
    }
    
    return time1 - time2;
  });
  
  console.log("sorted", times);
  
  let maxRooms = 0;
  let currentRooms = 0;
  
  for (const [time, type] of times) {
    if (type === "start") {
      currentRooms += 1;
      maxRooms = Math.max(maxRooms, currentRooms);
    } else {
      currentRooms -= 1;
    }
  }
  
  return maxRooms;
}