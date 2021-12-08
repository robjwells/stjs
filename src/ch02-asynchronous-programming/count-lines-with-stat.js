import glob from "glob-promise";
import fs from "fs-extra-promise";

function statPair(filename) {
  return new Promise((resolve, reject) => {
    fs.statAsync(filename)
      .then((stats) => resolve({ filename, stats }))
      .catch((err) => reject(err));
  });
}

function lineCount(filename) {
  return new Promise((resolve, reject) => {
    fs.readFileAsync(filename, { encoding: "utf-8" })
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
    .then((files) => files.map((f) => statPair(f)))
    .then((promises) => Promise.all(promises))
    .then((files) => files.filter((pair) => pair.stats.isFile()))
    .then((files) => files.map((pair) => pair.filename))
    .then((filenames) => filenames.map(lineCount))
    .then((promises) => Promise.all(promises))
    .then((counts) =>
      counts.forEach(({ lines, name }) => {
        console.log(`${lines}: ${name}`);
      })
    )
    .catch((err) => console.error(err.message));
}

const srcDir = process.argv[2] ?? ".";
main(srcDir);
