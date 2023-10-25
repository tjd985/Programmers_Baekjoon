let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [n, numList, targetLength, targetList] = input;
let result = [];

numList = numList.split(" ").map(Number).sort((a, b) => a - b);
targetList = targetList.split(" ").map(Number);

for (const word of targetList) {
  let start = 0;
  let end = numList.length - 1;
  let hasTarget = false;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (numList[mid] < word) {
      start = mid + 1;
      continue;
    }

    if (numList[mid] > word) {
      end = mid - 1;
      continue;
    }

    hasTarget = true;

    break;
  }

  if (hasTarget) {
    result.push(1);

    continue;
  }

  result.push(0);
}

console.log(result.join("\n"));