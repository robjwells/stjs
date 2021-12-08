import glob from "glob-promise";
import { readFile } from "fs/promises";

function main(srcDir) {
  glob(`${srcDir}/**/*.*`)
    .then((files) => files.map((f) => lineCount(f)))
    .then((promises) => Promise.all(promises))
    .then((counts) => counts.forEach((c) => console.log(c)))
    .catch((err) => console.error(err));
}

function lineCount(filename) {
  return new Promise((resolve, reject) => {
    readFile(filename, { encoding: "utf-8" })
      .then((data) => data.split("\n").length - 1)
      .then((length) => resolve(length))
      .catch((err) => reject(err));
  });
}

const srcDir = process.argv[2];
main(srcDir);
