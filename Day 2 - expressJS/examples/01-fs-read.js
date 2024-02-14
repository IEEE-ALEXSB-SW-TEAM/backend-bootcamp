const fs = require("fs");

fs.readFile("../test-data/test.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
