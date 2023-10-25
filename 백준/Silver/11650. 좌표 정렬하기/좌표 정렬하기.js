let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [foo, ...inputt] = input;

inputt = inputt.map((value) => value.split(" ").map(Number));

inputt.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let ans = "";
for (let i = 0; i < inputt.length - 1; i++) {
  ans += `${inputt[i][0]} ${inputt[i][1]} \n`;
}
ans += `${inputt[inputt.length - 1][0]} ${inputt[inputt.length - 1][1]}`;
console.log(ans);
