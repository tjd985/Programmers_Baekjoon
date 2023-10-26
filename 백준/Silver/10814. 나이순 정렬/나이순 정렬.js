let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [length, ...userList] = input;
userList = userList.map((value) => value.split(" "));

userList.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
});

userList = userList.map((value) => value.join(" "));

console.log(userList.join("\n"));