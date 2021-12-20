import Pledge from "./pledge.js";

new Pledge((resolve) => {
  console.log("top of a single then cause");
  setTimeout(() => {
    console.log("about to call resolve callback");
    resolve("this is the result");
  }, 0);
}).then((value) => {
  console.log(`in "then" with "${value}"`);
  return "first then value";
});
