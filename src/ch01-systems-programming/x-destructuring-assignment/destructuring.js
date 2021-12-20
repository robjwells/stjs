import assert from "assert";

const [first] = [10, 20, 30];
assert.equal(first, 10);

const [a, b] = [10, 20, 30];
assert.equal(a, 10);
assert.equal(b, 20);

const [c, d, e] = [10, 20, 30];
assert.equal(c, 10);
assert.equal(d, 20);
assert.equal(e, 30);

const [f, g, h, i] = [10, 20, 30];
assert.equal(f, 10);
assert.equal(g, 20);
assert.equal(h, 30);
assert.equal(i, undefined);

const { left, right } = { left: 10, right: 30 };
assert.equal(left, 10);
assert.equal(right, 30);

const { z, x, y: renamed } = { x: 10, y: 20, z: 30 };
assert.equal(x, 10);
assert.equal(renamed, 20);
assert.equal(z, 30);
