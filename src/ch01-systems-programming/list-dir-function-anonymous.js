import fs from "fs";

const srcDir = process.argv[2] ?? ".";
fs.readdir(srcDir, (err, files) => {
    console.log("Running callback:");
    if (err) {
        console.error(err);
    } else {
        for (const name of files) {
            console.log(name);
        }
    }
});
console.log("Last line of program.");
// FS access finishes and callback runs here.
