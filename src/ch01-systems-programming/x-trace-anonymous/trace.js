const blue = (left, right) => {
  console.log("Blue");
  left(right);
};

blue(
  (callback) => {
    console.log("Green");
    callback();
  },
  () => console.log("Red")
);
