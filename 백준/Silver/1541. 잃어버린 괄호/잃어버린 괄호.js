const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split("-");

if (input.length === 1) {
  console.log(eval(input[0]));
} else {
  const calculatedValueList = input.map((expression) => {
    return expression.split("+").reduce((acc, cur) => acc + Number(cur), 0);
  });

  console.log(calculatedValueList.reduce((acc, cur) => acc - cur));
}
