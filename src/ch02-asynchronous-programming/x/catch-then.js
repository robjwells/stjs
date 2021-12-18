new Promise((resolve, reject) => reject(new Error("failure")))
  .catch((err) => console.log(`Caught: ${err}`))
  // I don't think this is going to work as you might imagine as I
  // believe that attaching a then after a catch expects that the catch
  // transforms the error into a value than can be handled by the then.
  .then((err) => console.log(`Then: ${err}`));

// $ node src/ch02-asynchronous-programming/x/catch-then.js
// Caught: Error: failure
// Then: undefined
