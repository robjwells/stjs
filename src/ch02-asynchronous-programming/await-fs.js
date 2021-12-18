import fs from "fs-extra-promise";

async function firstTenCharacters(filename) {
  const text = await fs.readFileAsync(filename, { encoding: "utf-8" });
  console.log(`inside, raw text is ${text.length} characters long`);
  return text.slice(0, 10);
}

console.log("About to call.");
const result = firstTenCharacters(process.argv[2]);
console.log(`function result has type ${result.constructor.name}`);
result.then((value) => console.log(`outside, final result is ${value}`));
