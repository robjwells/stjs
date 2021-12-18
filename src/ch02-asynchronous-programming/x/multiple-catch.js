const oops = new Promise(
  (resolve, reject) => {
    console.log("About to reject.");
    return reject(new Error("failure"))
  }
)
console.log("Promise created.");
oops.catch(err => console.log(`first: ${err.message}`))
oops.catch(err => console.log(`second: ${err.message}`))
console.log("Callbacks attached.");

// I think this is different when you do it from the REPL (ie it
// complains about the rejection immediately) because once you enter it
// into the prompt, the event loops goes to the next tick.
