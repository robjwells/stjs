import Pledge from "./pledge.js";

const ret = new Pledge((resolve, reject) => {
  console.log("Top of a single then clause");
}).then((value) => {
  console.log(`then with "${value}"`);
  return "first then value";
});

console.log(ret);
