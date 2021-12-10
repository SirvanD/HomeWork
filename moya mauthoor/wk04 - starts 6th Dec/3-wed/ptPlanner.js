// Original data structure

// let lines = [
//     flindersStreetLine = {
//         stop1:  "Flinders Street",
//         stop2: {
//             // station: "Richmond",
//             // flagstaffLineStations: {
//             //     stop5: "Kooyong",
//             //     stop6: "Tooronga"
//             // },
//             // southernCrossLineStations: {
//             //     stop3: "South Yarra",
//             //     stop4: "Prahran",
//             //     stop5: "Windsor"
//             // }
//         },
//         stop3: "East Richmond",
//         stop4: "Burnley",
//         stop5: "Hawthorn",
//         stop6: "Glenferrie"
//     },
//     flagstaffLine = {
//         stop1: "Flagstaff",
//         stop2: "Melbourne Central",
//         stop3: "Parliament",
//         stop4: flindersStreetLine.stop2.station,
//         stop5: flindersStreetLine.stop2.flagstaffLineStations.stop5,
//         stop6: flindersStreetLine.stop2.flagstaffLineStations.stop6
//     },
//     southernCrossLine = {
//         stop1: "Southern Cross",
//         stop2: flindersStreetLine.stop2.station,
//         stop3: flindersStreetLine.stop2.southernCrossLineStations.stop3,
//         stop4: flindersStreetLine.stop2.southernCrossLineStations.stop4,
//         stop5: flindersStreetLine.stop2.southernCrossLineStations.stop5
//     }
// ]

// New data structure
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

    // Will probably need a counter for the number of stops
    // Will need to loop through multiple objects in an array and search through each of them to find a specific value - DONE
    // will need to somehow get hold of the object the item came from - DONE
    // will need to iterate through that object and print the values of the keys - DONE

    // then will need to work out how to switch lines 

    // ultimately will need to reverse to move backwards

    lines.forEach(function(line) {
        let startingPointLine = {};
        let startingPointStation;
        let endPointLine = {};
        let endPointStation;

        let stopCounter = -1;

        // could maybe make object.entries below an object.values instead
        for (const [key, value] of Object.entries(line)) {
            if (value === origin) {
                // Could also store this in an object, e.g. startingPoint.line and startingPoint.key
                startingPointLine = line;
                startingPointStation = key; 
            } else if (value === destination) {
                endPointLine = line;
                endPointStation = key;
            }
        }

        let startingPointLineStops = Object.values(startingPointLine);

        // This is to check if the destination is on the same line as the origin. Ideally would be its own function
        if (startingPointLineStops.includes(destination)) {
            let originIndex = startingPointLineStops.indexOf(origin);
            let destinationIndex = startingPointLineStops.indexOf(destination);

            let journey = [];
            if (originIndex < destinationIndex) {
                for (let i = originIndex; i <= destinationIndex; i++) {
                    journey.push(startingPointLineStops[i]);
                    stopCounter ++;
                }
            } else if (originIndex > destinationIndex) {
                for (let i = originIndex; i >= destinationIndex; i--) {
                    journey.push(startingPointLineStops[i]);
                    stopCounter ++;
                }
            } else {
                console.log("no journey needed - origin and destination are the same");
            }
            // DT says do this last, so would mean ensuring intersection function produces an array of stops as well
            printJourney(journey, stopCounter);
            // console.log(journey.join(" ----> "));
            // console.log("Total number of stops is " + stopCounter);
            
        } else {
           // handleintersection function 
            // should probably look through starting object, stop at richmond, then look through endpoint object, put all into single array
            let originIndex = startingPointLineStops.indexOf(origin);
            let startLineIntersectionIndex = startingPointLineStops.indexOf("Richmond");

            let endPointLineStops = Object.values(endPointLine);
            console.log(endPointLine)
            let endLineIntersectionIndex = endPointLineStops.indexOf("Richmond");
            let destinationIndex = endPointLineStops.indexOf(destination);

            let journey = [];
            debugger
            for (let i = originIndex; i < startLineIntersectionIndex; i++) {
                journey.push(startingPointLineStops[i]);
                stopCounter++;
            }
                        
            for (let i = endLineIntersectionIndex; i <= destinationIndex; i++ ) {
                journey.push(endPointLineStops[i]);
                stopCounter++
            }
            console.log(journey);

            printJourney(journey, stopCounter);


        }
        
        

       

        // }
        
    });
    
} 

function handleIntersection() {

}

function printJourney(journeyArray, numOfStops) {
    console.log(journeyArray.join(" ----> "));
    console.log("Total number of stops is " + numOfStops);
}



// planJourney("Flinders Street", "Burnley")




