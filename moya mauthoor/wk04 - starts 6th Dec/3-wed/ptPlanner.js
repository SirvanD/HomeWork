let intersection = {
    station: "Richmond",
    flindersStreetLineStations: {
        stop3: "East Richmond",
        stop4: "Burnley",
        stop5: "Hawthorn",
        stop6: "Glenferrie"
    },
    flagstaffLineStations: {
        stop5: "Kooyong",
        stop6: "Tooronga"
    },
    southernCrossLineStations: {
        stop3: "South Yarra",
        stop4: "Prahran",
        stop5: "Windsor"
    }
}

let lines = [
    flindersStreetLine = {
        stop1: "Flinders Street",
        stop2: intersection.station, 
        stop3: intersection.flindersStreetLineStations.stop3,
        stop4: intersection.flindersStreetLineStations.stop4,
        stop5: intersection.flindersStreetLineStations.stop5,
        stop6: intersection.flindersStreetLineStations.stop6
    },
    flagstaffLine = {
        stop1: "Flagstaff",
        stop2: "Melbourne Central",
        stop3: "Parliament",
        stop4: intersection.station,
        stop5: intersection.flagstaffLineStations.stop5,
        stop6: intersection.flagstaffLineStations.stop6
    },
    southernCrossLine = {
        stop1: "Southern Cross",
        stop2: intersection.station,
        stop3: intersection.southernCrossLineStations.stop3,
        stop4: intersection.southernCrossLineStations.stop4,
        stop5: intersection.southernCrossLineStations.stop5
    }
]

function planJourney(origin, destination) {

    let originStationLine = {};
    let destinationStationLine = {};

    lines.forEach(function(line) {
        for (const [key, value] of Object.entries(line)) {
            if (value === origin) {
                originStationLine = line;
            } else if (value === destination) {
                destinationStationLine = line;
            }
        }
    });

    let originStationLineStops = Object.values(originStationLine);

    if (originStationLineStops.includes(destination)) {
        handleSingleLine(origin, destination, originStationLineStops);
    } else {
        handleMultiLines(origin, destination, originStationLineStops, destinationStationLine);
    }
} 

function handleSingleLine(origin, destination, originStationLineStops) {

    let originIndex = originStationLineStops.indexOf(origin);
    let destinationIndex = originStationLineStops.indexOf(destination);
    let journey = [];
    let stopCounter = -1;
    
    if (originIndex < destinationIndex) {
        for (let i = originIndex; i <= destinationIndex; i++) {
            journey.push(originStationLineStops[i]);
            stopCounter ++;
        }
    } else if (originIndex > destinationIndex) {
        for (let i = originIndex; i >= destinationIndex; i--) {
            journey.push(originStationLineStops[i]);
            stopCounter ++;
        }
    } else {
        console.log("No journey needed - origin and destination are the same.");
    }

    printJourney(origin, destination, journey, stopCounter);
}

function handleMultiLines(origin, destination, originStationLineStops, destinationStationLine) {

    let originIndex = originStationLineStops.indexOf(origin);
    let originLineIntersectionIndex = originStationLineStops.indexOf("Richmond");

    let destinationStationLineStops = Object.values(destinationStationLine);
    let destinationLineIntersectionIndex = destinationStationLineStops.indexOf("Richmond");
    let destinationIndex = destinationStationLineStops.indexOf(destination);

    let journey = []; 
    let stopCounter = -1;

    if (originIndex < originLineIntersectionIndex) {
        for (let i = originIndex; i < originLineIntersectionIndex; i++) {
            journey.push(originStationLineStops[i]);
            stopCounter++;
        } 
    } else {
        for (let i = originIndex; i > originLineIntersectionIndex; i--) {
            journey.push(originStationLineStops[i]);
            stopCounter++;
        }
    }        
    if (destinationIndex > destinationLineIntersectionIndex) {
        for (let i = destinationLineIntersectionIndex; i <= destinationIndex; i++) {
            journey.push(destinationStationLineStops[i]);
            stopCounter++;
        }
    } else {
        for (let i = destinationLineIntersectionIndex; i >= destinationIndex; i--) {
            journey.push(destinationStationLineStops[i]);
            stopCounter++;
        }
    }
    printJourney(origin, destination, journey, stopCounter); 
}

function printJourney(origin, destination, journeyArray, numOfStops) {
    console.log(`Origin: ${ origin }`);
    console.log(`Destination: ${ destination }`);
    console.log(journeyArray.join(" ----> "));
    if (numOfStops >= 0) {
        console.log(numOfStops + " stops total");
    }
}

let origin = prompt("Where are you travelling from?");
let destination = prompt("Where would you like to go?");
planJourney(origin, destination);


