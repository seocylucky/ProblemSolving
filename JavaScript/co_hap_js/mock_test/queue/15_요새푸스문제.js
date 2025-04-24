class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(n, k) {
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }

    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));
