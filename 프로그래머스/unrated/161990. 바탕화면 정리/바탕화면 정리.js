function solution(wallpaper) {
  let garo = [];
  let sero = [];
  
  wallpaper.forEach((index, i) => {
    if(index.includes("#")) garo.push(i);
    for(let j=0; j<index.length; j++){
      if(index[j] === "#") sero.push(j);
    }
  });
  
  let left = Math.min(...sero);
  let right = Math.max(...sero);
  let top = Math.min(...garo);
  let bottom = Math.max(...garo);
  
  return [top, left, bottom+1, right+1];
}