import fs from "fs-extra-promise";
import { filenamesFromArgv } from "./fileutils.js";

const main = async () => {
  const files = filenamesFromArgv(process.argv);
  if (files.length === 0) return;
  const fileCountPairs = await Promise.all(files.map(lineCount));
  const counter = fileCountPairs.reduce((map, { lines }) => {
    map.set(lines, (map.get(lines) ?? 0) + 1);
    return map;
  }, new Map());
  const inOrder = Array.from(counter).sort(
    ([lengthA], [lengthB]) => lengthA - lengthB
  );

  console.log("Length\tNumber of Files\n======\t===============");
  for (const [length, nFiles] of inOrder) {
    console.log(`${length}\t${nFiles} ${"*".repeat(nFiles)}`);
  }
};

const lineCount = async (filename) => {
  const data = await fs.readFileAsync(filename, { encoding: "utf-8" });
  const lines = data.split("\n").length - 1;
  return {
    filename,
    lines,
  };
};

main();
