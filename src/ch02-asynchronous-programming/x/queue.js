export class Queue {
    constructor(limit = Infinity) {
        this.buffer = [];
        this.limit = limit;
    }
    checkLength() {
        if (this.buffer.length === 0) {
            throw new Error("Attempted to pop from an empty Queue.");
        }
    }
    push(value) {
        const newLength = this.buffer.push(value);
        if (newLength > this.limit) {
            const _ = this.buffer.shift();
        }
    }
    pop() {
        this.checkLength();
        return this.buffer.pop();
    }
    enqueue(value) {
        const newLength = this.buffer.unshift(value);
        if (newLength > this.limit) {
            const _ = this.buffer.pop();
        }
    }
    dequeue() {
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
