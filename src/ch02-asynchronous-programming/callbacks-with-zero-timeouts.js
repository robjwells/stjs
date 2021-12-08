[1000, 1500, 500].forEach((t) => {
  console.log(`about to set timeout for ${t}`);
  setTimeout(() => {
    console.log(`inside timer handler for ${t}`);
  }, 0);
});
