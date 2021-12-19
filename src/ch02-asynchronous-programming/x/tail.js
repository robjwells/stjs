import { filenamesFromArgv, readFileByLine } from "./fileutils.js";
import { Queue } from "./queue.js";

const LINES_TO_READ = 5;

const tail = async (filename, count = LINES_TO_READ) => {
  const queue = new Queue(count);
  for await (const line of readFileByLine(filename)) {
    queue.push(line);
  }
  const output = [];
  for (const line of queue) {
    output.push(line);
  }
  return output.join("\n");
};

const main = async () => {
  const filtered = filenamesFromArgv(process.argv);
  for (const filename of filtered) {
    if (filtered.length !== 1) {
      console.log(`==> ${filename} <==`);
    }
    console.log(`${await tail(filename)}\n`);
  }
};

main();
