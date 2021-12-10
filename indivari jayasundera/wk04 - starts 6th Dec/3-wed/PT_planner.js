const transport = {
  alameinLine: [
    "Flinders Street",
    "Test",
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

function isDestinationAvailable(des) {
  if (transport.alameinLine.includes(des)) {
    return "alamein";
  } else if (transport.glenwaverleyLine.includes(des)) {
    return "glen";
  } else {
    return "sandrin";
  }
}

var route = [];
console.log("Route Planner");
var origin = process.argv[2];
var destination = process.argv[3];

if (transport.alameinLine.includes(origin)) {
  var indexOrigin = transport.alameinLine.indexOf(origin);
  if (transport.alameinLine.includes(destination)) {
    var indexDestination = transport.alameinLine.indexOf(destination);

    var j = 0;
    if (indexOrigin <= indexDestination) {
      for (let i = indexOrigin; i <= indexDestination; i++) {
        route[j] = transport.alameinLine[i];
        j++;
      }
    } else {
      for (let i = indexOrigin; i >= indexDestination; i--) {
        route[j] = transport.alameinLine[i];
        j++;
      }
    }
    console.log(route.join("----->"));
  } else if (transport.glenwaverleyLine.includes(destination)) {
    indexDestination = transport.glenwaverleyLine.indexOf(destination);

    var indexRichmondAlamein = transport.alameinLine.indexOf("Richmond");

    var indexRichmondGlen = transport.glenwaverleyLine.indexOf("Richmond");

    for (let i = indexOrigin; i <= indexRichmondAlamein; i++) {
      route[i] = transport.alameinLine[i]; // adding stations upto Richmond in AlameinLine
    }
    for (let i = indexRichmondGlen + 1; i <= indexDestination; i++) {
      route.push(transport.glenwaverleyLine[i]); //adding remaining stations from the Glen waverley line
    }
    console.log(route.join("----->"));
  }
}

// function printOriginToRichmond(indexOrigin,indexRich){
//   for(let i=indexOrigin; i<= indexRich){
//     console.log()
//   }
// }

// var line;
// console.log(destination);

// if (transport.alameinLine.includes(destination)) {
//   line = 1;

//   console.log("Destination index: " + indexDestination);
// } else if (transport.glenwaverleyLine.includes(destination)) {
//   line = 2;
// } else if (transport.sandringhamLine.includes(destination)) {
//   line = 3;
// } //destination not found in a
// else {
//   var indexRichmond = transport.alameinLine.indexOf("Richmond");
// }

// // backward trip - same line
// if (indexOrigin < indexDestination) {
//   for (let i = indexOrigin; i <= indexDestination; i++) {
//     console.log(transport.alameinLine[i]);
//     console.log("--------->");
//   }
// } else {
//   for (let i = indexOrigin; i >= indexDestination; i--) {
//     console.log(transport.alameinLine[i]);
//     console.log("--------->");
//   }
// }
