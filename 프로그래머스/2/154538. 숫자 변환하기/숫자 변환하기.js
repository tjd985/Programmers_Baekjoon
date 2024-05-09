function solution(x, y, n) {
  const queue = [[y, 0]];

  while (queue.length) {
    const [num, count] = queue.shift();

    if (num === x) {
      return count;
    }

    if (num % 2 === 0 && num / 2 >= x) {
      queue.push([num / 2, count + 1]);
    }

    if (num % 3 === 0 && num / 3 >= x) {
      queue.push([num / 3, count + 1]);
    }

    if (num - n >= x) {
      queue.push([num - n, count + 1]);
    }
  }

  return -1;
}