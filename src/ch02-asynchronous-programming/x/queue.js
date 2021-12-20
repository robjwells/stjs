export class Queue {
    constructor(limit = Infinity) {
        this.buffer = [];
        if (limit <= 0) {
            throw new Error("Limit cannot be <= 0.");
        }
        this.limit = limit;
    }
    ensureNonEmpty() {
        if (this.buffer.length === 0) {
            throw new Error("Attempted to remove item from an empty Queue.");
        }
    }
    push(value) {
        const newLength = this.buffer.push(value);
        if (newLength > this.limit) {
            this.buffer.shift();
        }
    }
    pop() {
        this.ensureNonEmpty();
        return this.buffer.pop();
    }
    pushLeft(value) {
        const newLength = this.buffer.unshift(value);
        if (newLength > this.limit) {
            this.buffer.pop();
        }
    }
    popLeft() {
        this.ensureNonEmpty();
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
