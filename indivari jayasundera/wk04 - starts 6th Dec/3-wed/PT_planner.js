const transport = {
  alameinLine: [
    "Flinders Street",
    "Richmond",
    "East Richmond",
    "Burnley",
    "Hawthorn",
    "Glenferrie",
  ],
  glenwaverleyLine: [
    "Flagstaff",
    "Melbourne Central",
    "Parliment",
    "Richmond",
    "Kooyong",
    "Tooronga",
  ],
  sandringhamLine: [
    "Southern Cross",
    "Richmond",
    "South Yarra",
    "Prahran",
    "Windsor",
  ],
};

console.log("Input origin and destination");
var origin = process.argv[2];
console.log(origin);
if (transport.alameinLine.includes(origin)) {
  var indexOrigin = transport.alameinLine.indexOf(origin);
  console.log("Origin index: " + indexOrigin);
}

var destination = process.argv[3];
console.log(destination);
if (transport.alameinLine.includes(destination)) {
  var indexDestination = transport.alameinLine.indexOf(destination);
  console.log("Destination index: " + indexDestination);
}

for (let i = indexOrigin; i <= indexDestination; i++) {
  console.log(transport.alameinLine[i]);
  console.log("--------->");
}
