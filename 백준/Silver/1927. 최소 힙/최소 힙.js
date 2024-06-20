const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
let minheap = [];
let answer = "";

function insert(heap, num) {
  heap.push(num);

  let ind = heap.length;

  while (ind > 1) {
    if (heap[Math.floor(ind / 2) - 1] > heap[ind - 1]) {
      const temp = heap[ind - 1];

      heap[ind - 1] = heap[Math.floor(ind / 2) - 1];
      heap[Math.floor(ind / 2) - 1] = temp;
      ind = Math.floor(ind / 2);
    } else {
      break;
    }
  }

  return heap;
}

function del(heap) {
  heap[0] = heap[heap.length - 1];
  heap.pop();

  const len = heap.length;
  let ind = 1;

  while (ind * 2 <= len) {
    if (
      heap[ind - 1] > heap[ind * 2 - 1] &&
      (heap[2 * ind] === undefined || heap[ind * 2 - 1] < heap[ind * 2])
    ) {
      const temp = heap[ind * 2 - 1];

      heap[ind * 2 - 1] = heap[ind - 1];
      heap[ind - 1] = temp;
      ind = ind * 2;
    } else if (heap[ind - 1] > heap[ind * 2]) {
      const temp = heap[ind * 2];

      heap[ind * 2] = heap[ind - 1];
      heap[ind - 1] = temp;
      ind = ind * 2 + 1;
    } else {
      break;
    }
  }

  return heap;
}

input.forEach((value) => {
  if (value === 0) {
    if (minheap.length > 0) {
      answer += `${minheap[0]}\n`;
      minheap = del(minheap);
    } else {
      answer += "0\n";
    }
  } else {
    minheap = insert(minheap, value);
  }
});

console.log(answer.trim());
