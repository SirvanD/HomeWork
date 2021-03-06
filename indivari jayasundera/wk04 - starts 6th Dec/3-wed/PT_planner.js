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
    "Test2",
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
var indexOrigin;
var indexDestination;
var j;
var indexRichmondAlamein, indexRichmondGlen, indexRichmondSandringham;

function printSameLineRoute(indexOrigin, indexDestination, line) {
  j = 0;
  if (indexOrigin <= indexDestination) {
    for (let i = indexOrigin; i <= indexDestination; i++) {
      route[j] = line[i];
      j++;
    }
  } else {
    for (let i = indexOrigin; i >= indexDestination; i--) {
      route[j] = transport.line[i];
      j++;
    }
  }
  console.log(route.join("----->"));
}

if (transport.alameinLine.includes(origin)) {
  indexOrigin = transport.alameinLine.indexOf(origin);
  if (transport.alameinLine.includes(destination)) {
    indexDestination = transport.alameinLine.indexOf(destination);

    printSameLineRoute(indexOrigin, indexDestination, transport.alameinLine);
  } else if (transport.glenwaverleyLine.includes(destination)) {
    indexDestination = transport.glenwaverleyLine.indexOf(destination);

    indexRichmondAlamein = transport.alameinLine.indexOf("Richmond");

    indexRichmondGlen = transport.glenwaverleyLine.indexOf("Richmond");

    for (let i = indexOrigin; i <= indexRichmondAlamein; i++) {
      route[i] = transport.alameinLine[i]; // adding stations upto Richmond in AlameinLine
    }
    for (let i = indexRichmondGlen + 1; i <= indexDestination; i++) {
      route.push(transport.glenwaverleyLine[i]); //adding remaining stations from the Glen waverley line
    }
    console.log(route.join("----->"));
  } //Sandringham line includes destination
  else if (transport.sandringhamLine.includes(destination)) {
    indexRichmondAlamein = transport.alameinLine.indexOf("Richmond");
    indexRichmondSandringham = transport.sandringhamLine.indexOf("Richmond");
    indexDestination = transport.sandringhamLine.indexOf(destination);

    for (let i = indexOrigin; i <= indexRichmondAlamein; i++) {
      route[i] = transport.alameinLine[i];
    }
    for (let i = indexRichmondSandringham + 1; i <= indexDestination; i++) {
      route.push(transport.sandringhamLine[i]);
    }
    console.log(route.join("----->"));
  }
} else if (transport.glenwaverleyLine.includes(origin)) {
  indexOrigin = transport.glenwaverleyLine.indexOf(origin);
  indexRichmondGlen = transport.glenwaverleyLine.indexOf("Richmond");

  if (transport.glenwaverleyLine.includes(destination)) {
    indexDestination = transport.glenwaverleyLine.indexOf(destination);
    printSameLineRoute(
      indexOrigin,
      indexDestination,
      transport.glenwaverleyLine
    );
    j = 0;
    if (indexOrigin <= indexDestination) {
      for (let i = indexOrigin; i <= indexDestination; i++) {
        route[j] = transport.glenwaverleyLine[i];
        j++;
      }
    } else {
      for (let i = indexOrigin; i >= indexDestination; i--) {
        route[j] = transport.glenwaverleyLine[i];
        j++;
      }
    }
    console.log(route.join("----->"));
  } else if (transport.alameinLine.includes(destination)) {
    indexRichmondAlamein = transport.alameinLine.indexOf("Richmond");
    indexDestination = transport.alameinLine.indexOf(destination);
    j = 0;

    for (let i = indexOrigin; i <= indexRichmondGlen; i++) {
      route[j] = transport.glenwaverleyLine[i];
      j++;
    }
    for (let i = indexRichmondAlamein + 1; i <= indexDestination; i++) {
      route.push(transport.alameinLine[i]);
    }
    console.log(route.join("----->"));
  } else if (transport.sandringhamLine.includes(destination)) {
    indexRichmondSandringham = transport.sandringhamLine.indexOf("Richmond");
    indexDestination = transport.sandringhamLine.indexOf(destination);
    j = 0;

    for (let i = indexOrigin; i <= indexRichmondGlen; i++) {
      route[j] = transport.glenwaverleyLine[i];
      j++;
    }
    for (let i = indexRichmondSandringham + 1; i <= indexDestination; i++) {
      route.push(transport.sandringhamLine[i]);
    }
    console.log(route.join("----->"));
  }
} else if (transport.sandringhamLine.includes(origin)) {
  indexOrigin = transport.sandringhamLine.indexOf(origin);
  indexRichmondSandringham = transport.sandringhamLine.indexOf("Richmond");

  if (transport.sandringhamLine.includes(destination)) {
    indexDestination = transport.glenwaverleyLine.indexOf(destination);
    j = 0;
    if (indexOrigin <= indexDestination) {
      for (let i = indexOrigin; i <= indexDestination; i++) {
        route[j] = transport.sandringhamLine[i];
        j++;
      }
    } else {
      for (let i = indexOrigin; i >= indexDestination; i--) {
        route[j] = transport.sandringhamLine[i];
        j++;
      }
    }
    console.log(route.join("----->"));
  } else if (transport.glenwaverleyLine.includes(destination)) {
    indexDestination = transport.glenwaverleyLine.indexOf(destination);
    indexRichmondSandringham = transport.sandringhamLine.indexOf("Richmond");

    indexRichmondGlen = transport.glenwaverleyLine.indexOf("Richmond");

    j = 0;

    for (let i = indexOrigin; i <= indexRichmondSandringham; i++) {
      route[j] = transport.sandringhamLine[i];
      j++;
    }
    for (let i = indexRichmondGlen + 1; i <= indexDestination; i++) {
      route.push(transport.glenwaverleyLine[i]);
    }
    console.log(route.join("----->"));
  } else if (transport.alameinLine.includes(destination)) {
    indexDestination = transport.alameinLine.indexOf(destination);
    indexRichmondSandringham = transport.sandringhamLine.indexOf("Richmond");

    indexRichmondAlamein = transport.alameinLine.indexOf("Richmond");

    j = 0;

    for (let i = indexOrigin; i <= indexRichmondSandringham; i++) {
      route[j] = transport.sandringhamLine[i];
      j++;
    }
    for (let i = indexRichmondAlamein + 1; i <= indexDestination; i++) {
      route.push(transport.alameinLine[i]);
    }

    console.log(route.join("----->"));
  }
}
