function solution(array, com){
    const result = [];
    com.forEach((arr) => {
      const miniArr = array.slice(arr[0]-1, arr[1]);
        miniArr.sort((a,b) => a-b);
      result.push(miniArr[arr[2]-1]);
    });
  return result;
}