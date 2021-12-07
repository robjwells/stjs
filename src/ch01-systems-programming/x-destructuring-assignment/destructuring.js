import assert from "assert";

const arrayEqual = (first, second) =>
  Array.isArray(first) &&
  Array.isArray(second) &&
  first.length === second.length &&
  first.filter((_, idx) => first[idx] !== second[idx]).length === 0;

var first = [10, 20, 30];
assert(arrayEqual(first, [10, 20, 30]));

var [first, second] = [10, 20, 30];
assert.equal(first, 10);
assert.equal(second, 20);

var [first, second, third] = [10, 20, 30];
assert.equal(first, 10);
assert.equal(second, 20);
assert.equal(third, 30);

var [first, second, third, fourth] = [10, 20, 30];
assert.equal(first, 10);
assert.equal(second, 20);
assert.equal(third, 30);
assert.equal(fourth, undefined);

var { left, right } = { left: 10, right: 30 };
assert.equal(left, 10);
assert.equal(right, 30);

var { left, middle, right } = { left: 10, middle: 20, right: 30 };
assert.equal(left, 10);
assert.equal(middle, 20);
assert.equal(right, 30);
