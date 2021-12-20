// Completed Promise object.
console.log(Promise.resolve("hello"));
// I think this is because when console.log is called, the value of the
// promise is definitely known.

// Pending promise object, then "hello" is printed to the console.
console.log(Promise.resolve("hello").then((result) => console.log(result)));
// I think this is because the value of the promise isn't known until
// the callbacks return, but they don't run until the event loop kicks
// in.

// As above.
const p = new Promise((resolve) => resolve("hello")).then((result) =>
  console.log(result)
);
console.log(p);
