const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num1 = parseInt(input[0]);
  const num2 = parseInt(input[1]);

  if (num1 > 0) {
    if (num2 > 0) {
      return console.log(1);
    }
  
    if (num2 < 0) {
      return console.log(4);
    }
  }
  
  if (num2 > 0) {
    return console.log(2);
  }
  
  console.log(3);
  
  process.exit();
});