let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// input = input.map((value) => Number(value));

input = input.map((value) => value.split(" "));

for (const innerArray of input) {
  let result = "";
  
  if (innerArray.length === 1) {
    continue;
  }

  const [num, value] = [...innerArray];

  for (const word of value) {
    result += word.repeat(num);
  }

  console.log(result);
}