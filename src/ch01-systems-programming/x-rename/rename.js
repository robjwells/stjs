import fs from "fs";
import path from "path";

const [oldExt, newExt, ...files] = process.argv.slice(2);

const data = files
  .map((file) => {
    const parsed = path.parse(file);
    if (parsed.ext !== oldExt) {
      console.error(`Skipping ${file} as its extension is not ${oldExt}`);
      return undefined;
    } else {
      parsed.base = "";
      parsed.ext = newExt;
      return {
        src: file,
        dst: path.format(parsed),
      };
    }
  })
  .filter((item) => item !== undefined);

for (const { src, dst } of data) {
  fs.copyFile(src, dst, fs.constants.COPYFILE_EXCL, (err) => {
    if (err) {
      console.error(`Refusing to move ${src} as ${dst} already exists.`);
    } else {
      fs.unlinkSync(src);
      console.log(`Moved ${src} to ${dst}`);
    }
  });
}
