import { filenamesFromArgv, readFileByLine } from "./fileutils.js";

const LINES_TO_READ = 5;

const head = async (filename, count = LINES_TO_READ) => {
  const lineIterator = readFileByLine(filename);
  let remaining = count;
  const outputBuffer = [];

  for await (const line of lineIterator) {
    if (remaining === 0) {
      break;
    }
    remaining -= 1;
    outputBuffer.push(line);
  }

  return outputBuffer.join("\n");
};

const main = async () => {
  const filtered = filenamesFromArgv(process.argv);
  for (const file of filtered) {
    if (filtered.length !== 1) {
      console.log(`==> ${file} <==`);
    }
    console.log(`${await head(file)}\n`);
  }
};

main();
