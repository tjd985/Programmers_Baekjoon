let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [length, ...originalUserList] = input;
const ranking = {};
let result = "";

const userList = originalUserList.map((value) => value.split(" ").map(Number));
userList.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

for (let i = 0; i < length - 1; i++) {
  const [myWeight, myHeight] = userList[i];
  let count = 0;

  for (let j = i + 1; j < length; j++) {
    const [userWeight, userHeight] = userList[j];

    if (myHeight < userHeight) {
      if (myWeight < userWeight) {
        count++;
      }
    }
  }

  ranking[userList[i].join(" ")] = count + 1;
}

ranking[userList[length - 1].join(" ")] = 1;

for (let i = 0; i < length - 1; i++) {
  const user = originalUserList[i];

  result += `${ranking[user]} `
}

console.log(result + ranking[originalUserList[length - 1]]);