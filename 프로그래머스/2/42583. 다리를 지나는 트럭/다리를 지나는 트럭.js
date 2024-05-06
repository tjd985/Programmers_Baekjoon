function getNextWeight(bridge, nextTruck) {
  return bridge.reduce((acc, cur) => { return acc + cur }, 0) - bridge[0] + nextTruck;
}

function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let result = 0;

  truck_weights.reverse();
  
  while(truck_weights.length !== 0) {
    const nextTruck = truck_weights[truck_weights.length - 1];
    
    if (getNextWeight(bridge, nextTruck) > weight) {
      bridge.push(0);
      bridge.shift();
    } else {
      bridge.push(truck_weights.pop());
      bridge.shift();
    }
    
    result++;
  }
  
  return result + bridge_length;
}