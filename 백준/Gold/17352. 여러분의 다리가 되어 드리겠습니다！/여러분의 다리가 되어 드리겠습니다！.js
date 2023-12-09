let fs = require('fs');
const { start } = require('repl');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(filePath).toString().trim().split(" ");
// let input = fs.readFileSync(filePath).toString().trim().split("");
const [totalIsland, ...linkedIsland] = input;
const isVisit = new Array(+totalIsland).fill(false);
const islandGraph = {};
const queue = [];

if (totalIsland === "2") {
  console.log("1 2");
}

linkedIsland.forEach((link) => {
  const [start, end] = link.split(" ");

  if (islandGraph[start]) {
    islandGraph[start].push(end);
  } else {
    islandGraph[start] = [end];
  }

  if (islandGraph[end]) {
    islandGraph[end].push(start);
  } else {
    islandGraph[end] = [start];
  }
});

for (const node in islandGraph) {
  queue.push(node);
  let lastIsland = 0;

  while (queue.length) {
    const currentIsland = queue.pop();
    const linkedIsland = islandGraph[currentIsland];

    isVisit[currentIsland - 1] = true;

    linkedIsland.forEach((island) => {
      if (!isVisit[island - 1]) {
        queue.push(island);
      }
    });

    lastIsland = currentIsland;
  }

  const needConnectIsland = isVisit.findIndex((value) => value === false) + 1;

  console.log(lastIsland + " " + needConnectIsland);

  break;
}