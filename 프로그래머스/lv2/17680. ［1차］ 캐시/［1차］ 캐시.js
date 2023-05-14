function solution(cacheSize, cities) {
  let cache = [];
  let timer = 0;
  cities = cities.map((index) => index.toUpperCase());
  if(cacheSize === 0) return 5*cities.length;
  
  cities.forEach((index) => {
    let num = cache.indexOf(index);

    if(num !== -1){
      cache.splice(num, 1);
      cache.push(index);
      timer += 1;
    }
    
    else{
      if(cache.length < cacheSize) cache.push(index);
      
      else{
        cache.shift();
        cache.push(index);
      }
      timer +=5;
    }
  });
  
  return timer;
}