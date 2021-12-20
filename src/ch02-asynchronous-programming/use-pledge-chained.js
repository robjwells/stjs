import Pledge from "./pledge.js";

new Pledge((resolve) => {
  console.log("Top of action callback with double then");
  setTimeout(() => {
    console.log("About to resolve callback");
    resolve("initial result");
    console.log("after resolve callback");
  }, 0);
  console.log("End of action callback");
})
  .then((value) => {
    console.log(`first then with "${value}"`);
    return "first value";
  })
  .then((value) => {
    console.log(`second then with "${value}"`);
    return "second value";
  });
