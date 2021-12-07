import { readFileSync } from "fs";

const max = (a, b) => (a >= b ? a : b);

function printCentred(left, right) {
  console.log(left.padStart(padLength), right);
}

const files = process.argv.slice(2);
const padLength = files.map((f) => f.length).reduce(max);

function countLines(file) {
  const data = readFileSync(file, "utf8");
  const lines = data.split("\n").length;
  return lines;
}

const results = files.map((file) => ({
  file,
  count: countLines(file),
}));

const total = results.reduce(
  (previous, current) => previous + current.count,
  0
);

for (const { file, count } of results) {
  printCentred(file, count);
}
printCentred("total", total);
