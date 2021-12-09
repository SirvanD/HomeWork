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

function isDestinationAvailable(des) {
  if (transport.alameinLine.includes(des)) {
    return "alamein";
  } else if (transport.glenwaverleyLine.includes(des)) {
    return "glen";
  } else {
    return "sandrin";
  }
}

console.log("Input origin and destination");
var origin = process.argv[2];

if (transport.alameinLine.includes(origin)) {
  var indexOrigin = transport.alameinLine.indexOf(origin);
  console.log("Origin index: " + indexOrigin);
}

function printOriginToRichmond(indexOrigin,indexRich){
  for(let i=indexOrigin; i<= indexRich){
    console.log()
  }
}

var destination = process.argv[3];
var line ;
console.log(destination);

if (transport.alameinLine.includes(destination)) {
  line = 1;
  var indexDestination = transport.alameinLine.indexOf(destination);
  console.log("Destination index: " + indexDestination);
} else if (transport.glenwaverleyLine.includes(destination)){
  line =2;

}else if (transport.sandringhamLine.includes(destination)){
  line =3;
} else //destination not found in a
{
  var indexRichmond = transport.alameinLine.indexOf("Richmond");
}

// backward trip - same line
if (indexOrigin < indexDestination) {
  for (let i = indexOrigin; i <= indexDestination; i++) {
    console.log(transport.alameinLine[i]);
    console.log("--------->");
  }
} else {
  for (let i = indexOrigin; i >= indexDestination; i--) {
    console.log(transport.alameinLine[i]);
    console.log("--------->");
  }
}
