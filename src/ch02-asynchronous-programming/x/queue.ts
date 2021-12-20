export class Queue<T> {
  private buffer: T[] = [];
  private limit: number;

  constructor(limit: number = Infinity) {
    if (limit <= 0) {
      throw new Error("Limit cannot be <= 0.");
    }
    this.limit = limit;
  }

  private ensureNonEmpty(): void {
    if (this.buffer.length === 0) {
      throw new Error("Attempted to remove item from an empty Queue.");
    }
  }

  push(value: T): void {
    const newLength = this.buffer.push(value);
    if (newLength > this.limit) {
      this.buffer.shift();
    }
  }

  pop(): T {
    this.ensureNonEmpty();
    return this.buffer.pop() as T;
  }

  pushLeft(value: T): void {
    const newLength = this.buffer.unshift(value);
    if (newLength > this.limit) {
      this.buffer.pop();
    }
  }

  popLeft(): T {
    this.ensureNonEmpty();
    return this.buffer.shift() as T;
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
