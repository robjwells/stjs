import glob from "glob-promise";
import { readFile } from "fs/promises";

function lineCount(filename) {
  return new Promise((resolve, reject) => {
    readFile(filename, { encoding: "utf-8" })
      .then((data) =>
        resolve({
          name: filename,
          lines: data.split("\n").length - 1,
        })
      )
      .catch((err) => reject(err));
  });
}

function main(srcDir) {
  glob(`${srcDir}/**/*.*`)
    .then((files) => files.map((f) => lineCount(f)))
    .then((promises) => Promise.all(promises))
    .then((results) => {
      for (const { name, lines } of results) {
        console.log(`${lines}: ${name}`);
      }
    });
}

const srcDir = process.argv[2]
main(srcDir)
