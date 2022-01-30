// PT PLANNER
// Melbourne Public Transport Journey Planner
// There are 3 train lines:

// The Alamein line has the following stops:

// Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
// The Glen Waverly line has the following stops:

// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
// The Sandringham line has the following stops:

// Southern Cross - Richmond - South Yarra - Prahran - Windsor.
// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

//                            Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
//                                                 ||
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
//                                                 ||
//                             Southern Cross - Richmond - South Yarra - Prahran - Windsor
// Given an origin and a destination. Write a program that display the journey in text similar the one shown below.

// example:

// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total
// example:

// origin: Melbourne Central
// destination: Windsor

// Melbourne Central -----> Parliament -----> Richmond 
//                                               ||
//                                            Richmond -----> South Yarra -----> Prahran -----> Windsor

// 5 stops total      
//                                     
// Hints:
// Read the whole document from top to bottom at least 3 times to understand the problem.
// Consider diagramming the lines by sketching out the train lines and their stops and intersection.
// Think about what data structure to use to store each line and all the stops on each line.
// Break the problem down. Solve the problem for just one single line first.
// Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
// You may want to hard code the origin and destination stations and lines instead of getting user input for easier testing during development.

// The key to the lab is the intersection of the lines at Richmond, assume that's the only intersection.

// Non-Required Bonus:
// input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it



// debugger;


let usrStart = "Windsor";
let usrDestination = "Hawthorn";

// ensure the correctness of users input
// 
// if (stops.includes(usrStart) == false) {
//     alert('Please input the right start stop')
// }
// if (stops.includes(usrDestination) == false) {
//     alert('Please input the right destination stop')
// }
// function properInput(usrInput) {
//     input = usrInput.slice(0, 1).toUpperCase() + usrInput.slice(1).toLowerCase();
//     return input
// } //if this function is activated, line 91 and 92 need to update

let stops = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie", "Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga", "Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

//the index of each items in stopValue is the same as the corresponding stop in the above array "stops".
//in each sub-array in stopValue, the first number is the distance from Richmond (Richmond is set as zero), negative means at left side, positive means at right side. 
//the second number represents which train line it is. 
//eg: the index of "East Richmond" in array "stops" is 2, and in array "stopValue", index 2 is "[1,1]", which is also East Richmond's postion in the train map: 1 stop from Richmond, at right side of Richmond, and in Line 1.

//                                [-1,1]/1       [0,1]/0      [1,1]/2      [2,1]/3    [3,1]/4    [4,1]/5
//                            Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie
//                                                 ||
// [-3,2]/6     [-2,2]/7            [-1,2]/8    [0,2]/9   [1,2]/10   [2,2]/11
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga
//                                                 ||
//                                  [-1,3]/12   [0,3]/13   [1,3]/14     [2,3]/15   [3,3]/16
//                             Southern Cross - Richmond - South Yarra - Prahran - Windsor

let stopValue = [[-1, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [-3, 2], [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2], [-1, 3], [0, 3], [1, 3], [2, 3], [3, 3]];

let startPosition = stops.indexOf(usrStart); // the index of array stops
let destinationPosition = stops.indexOf(usrDestination); // the index of array stops

let startValue = stopValue[startPosition]; // the item of array stopValue
let destinationValue = stopValue[destinationPosition]; // the item of array stopValue

//add space before "||"
function addSpace(x) {
    let space = '';
    for (let i = 1; i < x; i++) {
        space += " "
    } return space
}

// if user selects "Richmond" as start or destination, system automatically treat it is at the same line with the destination or start.
if (usrStart == "Richmond") {
    startPosition = destinationPosition - destinationValue[0];
    startValue[1] = destinationValue[1];
}
if (usrDestination == "Richmond") {
    destinationPosition = startPosition - startValue[0];
    destinationValue[1] = startValue[1]
}


// when start and destination stops are in the same line, start stop is at the left side of destination
if (startValue[1] == destinationValue[1]) {
    console.log(`
origin: ${usrStart}
destination: ${usrDestination}
`)

    if (startPosition < destinationPosition) {
        let m = "";
        for (let i = startPosition; i < startPosition + Math.abs(destinationValue[0] - startValue[0]); i++) {
            m += stops[i] + " ---> "
        } console.log(`${m}${stops[destinationPosition]}`)
    }

    // when start and destination stops are in the same line, start stop is at the right side of destination
    else if (startPosition > destinationPosition) {
        let m = "";
        for (let i = startPosition; i > startPosition - Math.abs(startValue[0] - destinationValue[0]); i--) {
            m += stops[i] + " ---> "
        } console.log(`${m}${stops[destinationPosition]}`)
    } console.log(`
${Math.abs(destinationValue[0] - startValue[0])} stops total`)
}


// when start and destination stops are in different lines:
else if (startValue[1] !== destinationValue[1]) {

    let totalStops = Math.abs(startPosition - Math.abs(startValue[0]) - startPosition) + Math.abs(destinationPosition - (destinationPosition - Math.abs(destinationValue[0])))

    console.log(`
origin: ${usrStart}
destination: ${usrDestination}
`)

    // start stop is at left side of Richmond, while destination at right side
    if (startValue[0] < 0 && destinationValue[0] > 0) {
        let m = "";
        for (let i = startPosition; i < startPosition - startValue[0]; i++) {
            m += stops[i] + " ---> "
        } console.log(`${m}Richmond
${addSpace(m.length + 4)}||`)
        let n = "";
        for (let j = destinationPosition - destinationValue[0]; j < destinationPosition; j++) {
            n += stops[j] + " ---> "
        } console.log(`${addSpace(m.length + 4)}${n}${stops[destinationPosition]}`)
    }

    // start stop is at left side of Richmond, while destination at left side as well
    if (startValue[0] < 0 && destinationValue[0] < 0) {
        let m = "";
        for (let i = startPosition; i < startPosition - startValue[0]; i++) {
            m += stops[i] + " ---> "
        } console.log(`${m}Richmond
${addSpace(m.length + 4)}||`)
        let n = "";
        for (let j = destinationPosition - destinationValue[0]; j > destinationPosition; j--) {
            n += stops[j] + " ---> "
        } console.log(`${addSpace(m.length + 4)}${n}${stops[destinationPosition]}`)
    }

    // start stop is at right side of Richmond, while destination at right side as well
    if (startValue[0] > 0 && destinationValue[0] > 0) {
        let m = "";
        for (let i = startPosition; i > startPosition - startValue[0]; i--) {
            m += stops[i] + " ---> "
        } console.log(`${m}Richmond
${addSpace(m.length + 4)}||`)
        let n = "";
        for (let j = destinationPosition - destinationValue[0]; j < destinationPosition; j++) {
            n += stops[j] + " ---> "
        } console.log(`${addSpace(m.length + 4)}${n}${stops[destinationPosition]}`)
    }

    // start stop is at right side of Richmond, while destination at left side
    if (startValue[0] > 0 && destinationValue[0] < 0) {
        let m = "";
        for (let i = startPosition; i > startPosition - startValue[0]; i--) {
            m += stops[i] + " ---> "
        } console.log(`${m}Richmond
${addSpace(m.length + 4)}||`)
        let n = "";
        for (let j = destinationPosition - destinationValue[0]; j > destinationPosition; j--) {
            n += stops[j] + " ---> "
        } console.log(`${addSpace(m.length + 4)}${n}${stops[destinationPosition]}`)
    }

    console.log(`
${totalStops} stops total`)
}
