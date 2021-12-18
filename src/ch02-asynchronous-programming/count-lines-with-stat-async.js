import fs from "fs-extra-promise";
import glob from "glob-promise";

const statPair = async (filename) => {
  const stats = await fs.statAsync(filename);
  return {
    filename,
    stats,
  };
};

const lineCount = async (filename) => {
  const data = await fs.readFileAsync(filename, { encoding: "utf-8" });
  const lines = data.split("\n").length - 1;
  return {
    filename,
    lines,
  };
};

const main = async (srcDir) => {
  const files = await glob(`${srcDir}/**/*.*`);
  const pairs = await Promise.all(
    files.map(async (filename) => await statPair(filename))
  );
  const filtered = pairs
    .filter((pair) => pair.stats.isFile())
    .map((pair) => pair.filename);
  const counts = await Promise.all(
    filtered.map(async (name) => await lineCount(name))
  );
  counts.forEach(({ filename, lines }) => {
    console.log(`${lines}: ${filename}`);
  });
};

const srcDir = process.argv[2] ?? ".";
main(srcDir);
