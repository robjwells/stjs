import fs from "fs-extra-promise";
import readline from "readline";

export const isFile = async (filename) =>
  (await fs.statAsync(filename)).isFile();

export const rejectNonFilesWithwWarning = async (filename, ..._rest) => {
  if (await isFile(filename)) {
    return true;
  } else {
    console.error(`${filename} is not a file.`);
    return false;
  }
};

export const readFileByLine = (filename) => {
  const stream = fs.createReadStream(filename, { encoding: "utf-8" });
  const lineIterator = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  return lineIterator;
};

export const filenamesFromArgv = (argv) =>
  argv.slice(2).filter(rejectNonFilesWithwWarning);
