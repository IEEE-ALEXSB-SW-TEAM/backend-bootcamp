const fs = require("fs");

fs.readFile("../test-data/test.json", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    const obj = JSON.parse(data);
    console.log(obj);
  }
});
