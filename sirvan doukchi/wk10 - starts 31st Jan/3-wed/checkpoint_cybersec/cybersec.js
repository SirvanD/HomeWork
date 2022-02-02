const fs = require("fs");
const file = fs.readFileSync("data.txt").toString().split("\n");
const newObj = {};
for (let i = 1; i < file.length; i++) {
  if (file[i].length != 0) {
    const dealer = file[i].split(",");
    if (newObj.hasOwnProperty(dealer[0])) {
      newObj[dealer[0]].push({
        product: dealer[1],
        unitPrice: dealer[2],
        units: dealer[3],
        totalPrice: parseFloat(dealer[2] * parseFloat(dealer[3])).toFixed(2),
      });
    } else {
      newObj[dealer[0]] = [
        {
          product: dealer[1],
          unitPrice: dealer[2],
          units: dealer[3],
          totalPrice: parseFloat(dealer[2] * parseFloat(dealer[3])).toFixed(2),
        },
      ];
    }
  }
}
console.log(newObj);
