const fs = require("fs");

fs.writeFile("test.txt", "Hello World!", "utf-8", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Write operation complete.");
  }
});
