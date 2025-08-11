// sort 정렬 사용 시 - O(nlogn) 시간 복잡도 소요

// class PriorityQueue {
//   constructor() {
//     this.queue = [];
//   }

//   push(value, priority) {
//     this.queue.push(value);
//     this.sort();
//   }

//   pop() {
//     return this.queue.shift().value;
//   }

//   sort() {
//     this.queue.sort((a, b) => a.priority - b.priority);
//   }
// }

// 최소 힙 구조 사용 - O(logn) 시간 복잡도 소요
class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() && this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

const heap = new MinHeap();

heap.insert(5);
heap.insert(3);
heap.insert(10);
heap.insert(1);

console.log(heap.pop()); // 1
console.log(heap.pop()); // 3
console.log(heap.pop()); // 5

heap.insert(2);
heap.insert(4);

console.log(heap.pop()); // 2
console.log(heap.pop()); // 4
console.log(heap.pop()); // 10
