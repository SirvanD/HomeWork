const fs = require("fs");

const data = fs.readFileSync("data.txt", "UTF-8");

// split the contents by new line
const lines = data.split(/\r?\n/);

// print all lines
lines.forEach((line) => {
  console.log(line);
});
