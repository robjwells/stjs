export class Queue<T> {
  private buffer: T[] = [];
  private limit: number;

  constructor(limit: number = Infinity) {
    this.limit = limit;
  }

  private checkLength(): void {
    if (this.buffer.length === 0) {
      throw new Error("Attempted to pop from an empty Queue.");
    }
  }

  push(value: T): void {
    const newLength = this.buffer.push(value);
    if (newLength > this.limit) {
      const _ = this.buffer.shift();
    }
  }

  pop(): T {
    this.checkLength();
    return this.buffer.pop();
  }

  enqueue(value: T): void {
    const newLength = this.buffer.unshift(value);
    if (newLength > this.limit) {
      const _ = this.buffer.pop();
    }
  }

  dequeue(): T {
    this.checkLength();
    return this.buffer.shift();
  }

  get length() {
    return this.buffer.length;
  }

  *[Symbol.iterator]() {
    for (const line of this.buffer) {
      yield line;
    }
  }
}
