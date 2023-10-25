let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// // let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));

let [foo, ...inputt] = input;

inputt = inputt.map((value) => value.split(" ").map(Number));

inputt.sort(([Ax, Ay], [Bx, By]) => {
  return Ax === Bx ? Ay - By : Ax - Bx;
});

inputt = inputt.map((v) => v.join(" ")).join("\n");
console.log(inputt);