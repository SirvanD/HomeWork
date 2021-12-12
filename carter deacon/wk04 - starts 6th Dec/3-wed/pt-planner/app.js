// All arrays
var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]

// Getting user inputs. User will need to enter with capitalisation correct (can fix this ).
let userOrigin = prompt("Which station are you at?");
let userDestination = prompt("Which station are you headed to?");

//function to handle capitalisation on user inputs to make things a little nicer.
function capitalise(stringOne, stringTwo) {
    origin = stringOne.charAt(0).toUpperCase() + stringOne.slice(1);
    destination = stringTwo.charAt(0).toUpperCase() + stringTwo.slice(1);
    findLines(origin, destination);
}

capitalise(userOrigin, userDestination);

// Function to find which lines origin / destination are on
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
    console.log(`Origin: ${origin}`);
    console.log(`Destination: ${destination}`);
    fullTrip(line1, line2);
}

// Function to calculate full trip
function fullTrip(line1, line2) {
    let originIndex = line1.indexOf(origin);
    let destinationIndex =  line2.indexOf(destination);
    // If one line trip
    if (line1 === line2) {
        if (originIndex < destinationIndex) {
            newLine1 = line1.slice(originIndex, destinationIndex+1);
            stopCount1 = newLine1.length;
            stopCount2 = 0;
            line1String = newLine1.join(' ----> ');
            line2String = "";
        } else if (originIndex > destinationIndex) {
            newLine1 = line1.slice(destinationIndex, originIndex+1);
            stopCount1 = newLine1.length;
            stopCount2 = 0;
            reversedArray = newLine1.reverse();
            line1String = reversedArray.join(' ----> ');
            line2String = ""; 
        }
    // Multi-line trips    
    } else if (line1 !== line2) {
        line1Richmond = line1.indexOf("Richmond");
        line2Richmond = line2.indexOf("Richmond");
        if (originIndex < line1Richmond) {
            newLine1 = line1.slice(originIndex, line1Richmond+1);
            stopCount1 = newLine1.length;
            line1String = newLine1.join(' ----> ');
        } else if (originIndex > line1Richmond) {
            newLine1 = line1.slice(line1Richmond, originIndex+1);
            stopCount1 = newLine1.length;
            line1String = newLine1.join(' <---- ');
        }
        if (destinationIndex > line2Richmond) {
            newLine2 = line2.slice(line2Richmond, destinationIndex+1);
            stopCount2 = newLine2.length;
            line2String = newLine2.join(' ----> ');
        } else if (destinationIndex < line2Richmond) {
            newLine2 = line2.slice(destinationIndex, line2Richmond+1);
            stopCount2 = newLine2.length;
            line2String = newLine2.join(' <---- ');
        }
    }
    handleFormat(line1String, line2String);
    handleStops(stopCount1, stopCount2);
}

// Formatting to show joins and spacing for multi-line trips
function handleFormat(line1String, line2String) {
    let line1Length = line1String.length;
    let line2Length = line2String.length;
    let joiner = "   ||   ";
    let spaces = "";
    if (line2String === "") {
        console.log(line1String);
    }
    if (line1Length > line2Length && line2String !== "") {
        if (line1String.includes("---->") && line2String.includes("---->")) {
            for (let i = 0; i < line1Length-8; i++) {
                spaces = spaces + " ";
            }
            console.log(line1String);
            console.log(spaces + joiner);
            console.log(spaces + line2String);
        } else if (line1String.includes("<----") && line2String.includes("<----")) {
            for (let j = 0; j < line2Length-8; j++) {
                spaces = spaces + " ";
            }
            console.log(spaces + line1String);
            console.log(spaces + joiner);
            console.log(line2String);
        } else if (line1String.includes("---->") && line2String.includes("<----")) {
            let difference = line1Length - line2Length;
            let differenceSpaces = "";
            for (let k = 0; k < line1Length-8; k++) {
                spaces = spaces + " ";
            }
            for (let k = 0; k < difference; k++) {
                differenceSpaces = differenceSpaces + " ";
            }
            console.log(line1String);
            console.log(spaces + joiner);
            console.log(differenceSpaces + line2String);
        } else {
            console.log(line1String);
            console.log(joiner);
            console.log(line2String);
        }
    }
    // to cover all edge cases
    if (line1Length < line2Length) {
        if (line1String.includes("---->") && line2String.includes("---->")) {
            for (let i = 0; i < line1Length-8; i++) {
                spaces = spaces + " ";
            }
            console.log(line1String);
            console.log(spaces + joiner);
            console.log(spaces + line2String);
        } else if (line1String.includes("<----") && line2String.includes("<----")) {
            for (let j = 0; j < line2Length-8; j++) {
                spaces = spaces + " ";
            }
            console.log(spaces + line1String);
            console.log(spaces + joiner);
            console.log(line2String);
        } else if (line1String.includes("---->") && line2String.includes("<----")) {
            let difference = line2Length - line1Length;
            let differenceSpaces = "";
            for (let i = 0; i < line2Length-8; i++) {
                spaces = spaces + " ";
            }
            for (let j = 0; j < difference; j++) {
                differenceSpaces = differenceSpaces + " ";
            }
            console.log(differenceSpaces + line1String);
            console.log(spaces + joiner);
            console.log(line2String);
        }
    }
}

// Final function to show stop count
function handleStops(stopCount1, stopCount2) {
    if (stopCount2 == 0) {
        console.log(`Total Stops: ${stopCount1-1}`);
    } else {
        console.log(`Total Stops: ${(stopCount1 + stopCount2)-2}`)
    }
}