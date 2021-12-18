const returnAwait = async () => {
  try {
    return await Promise.reject(new Error("deliberate"));
  } catch (err) {
    console.log("caught exception");
  }
};

returnAwait();
