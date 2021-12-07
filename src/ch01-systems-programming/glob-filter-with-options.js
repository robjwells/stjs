import glob from "glob";

glob("**/*.*", { ignore: "*~" }, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (const filename of files) {
      console.log(filename);
    }
  }
});
