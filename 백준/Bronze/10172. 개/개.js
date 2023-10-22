let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log("\|\\\_\/\|\n\|q p\|   \/}\n\( 0 \)\"\"\"\\\n\|\"^\"`    \|\n\|\|\_\/\=\\\\\_\_\|");