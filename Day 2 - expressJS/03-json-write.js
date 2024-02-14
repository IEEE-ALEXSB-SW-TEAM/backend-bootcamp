const obj = {
  name: "John",
  age: 30,
  courses: ["Node.js", "Express.js", "MongoDB", "React.js", "Angular.js"],
};

obj.courses.push("Vue.js");

const json = JSON.stringify(obj);

console.log(json);

const fs = require("fs");

fs.writeFile("test.json", json, "utf-8", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Write operation complete.");
  }
});
