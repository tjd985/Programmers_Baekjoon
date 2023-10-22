let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map((value) => Number(value));

let hour = input[0];
let minute = input[1];

if (hour === 0) {
  if (minute < 45) {
    return console.log(23, 60 - (45 - minute));
  }

  return console.log(hour, minute - 45);
}

if (minute < 45) {
  return console.log(hour - 1, 60 - (45 - minute));
}

console.log(hour, minute - 45);
