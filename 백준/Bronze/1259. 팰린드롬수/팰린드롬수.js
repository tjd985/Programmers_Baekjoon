let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
// input = input.map((value) => Number(value));


for (let i = 0; i < input.length - 1; i++) {
  const num = input[i];
  let result = "";

  if (num.length === 1) {
    console.log("yes");

    continue;
  }

  for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      result = "no";

      break;
    }
  }

  if (result !== "no") {
    result = "yes";
  }

  console.log(result);
}