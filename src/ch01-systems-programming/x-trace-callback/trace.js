const red = () => {
  console.log("Red");
};

const green = (func) => {
  console.log("Green");
  func();
};

const blue = (left, right) => {
  console.log("Blue");
  left(right);
};

blue(green, red);

// Blue
// Green
// Red
