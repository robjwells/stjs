import Pledge from "./pledge.js";

new Pledge((resolve, reject) => {
  console.log("Top of action callback with deliberate error.");
  setTimeout(() => {
    console.log("About to reject on purpose");
    reject("error on purpose");
  }, 0);
  console.log("Bottom of action callback with deliberate error.");
})
  .then((value) => {
    console.log(`Should not be here with "${value}"`);
  })
  .catch((err) => {
    console.log(`in error handler with "${err}"`);
  });
