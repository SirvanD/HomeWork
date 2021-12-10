// Planning this bad boy:
// Determine if origin and destination are in the same array (.includes, maybe?)
    // If they are, no transfer needed
    // If they aren't find which array each one is in and find difference between origin/destination and Richmond (for transfer)
// Once Richmond located, is indexOf(Origin) > or < than Richmond and indexOf(Destination) > or < than Richmond as which way we need to go will change accordingly

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],

// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.
//                            Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
//                                                 ||
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
//                                                 ||
//                             Southern Cross - Richmond - South Yarra - Prahran - Windsor

// .slice the arrays at Richmond and the .reverse if travelling from high index to low index


// FIRST ITERATION JUST WITH LOOPS
function findLines(origin, destination) {
    if (alamein.includes(origin)) {
        line1 = alamein;
    } else if (glenWaverly.includes(origin)) {
        line1 = glenWaverly;
    } else if (sandringham.includes(origin)) {
        line1 = sandringham;
    }
    if (alamein.includes(destination)) {
        line2 = alamein;
    } else if (glenWaverly.includes(destination)) {
        line2 = glenWaverly;
    } else if (sandringham.includes(destination)) {
        line2 = sandringham;
    }
}

function getIndexes(line1, line2) {
    originIndex = line1[line1.indexOf(origin)];
    destinationIndex =  line2.indexOf(destination);
}

function tripPlanner(origin, destination) {
    let stopCount = 0;
    let journeyStr = ``;
    let i = alamein.indexOf(origin);
    while (alamein[i] !== destination) {
        if (alamein.indexOf(origin) < alamein.indexOf(destination)) {
            journeyStr = journeyStr + `${alamein[i]} =====> `
            stopCount++;
            i++;
        } else if (alamein.indexOf(origin) > alamein.indexOf(destination)) {
            journeyStr = journeyStr + `${alamein[i]} =====> `
            stopCount++;
            i--;
        }
    }
    console.log(`Origin: ${origin} Destination: ${destination}`);
    console.log(journeyStr + destination);
    console.log(`${stopCount} stops total`);
}

tripPlanner("Burnley", "Glenferrie");