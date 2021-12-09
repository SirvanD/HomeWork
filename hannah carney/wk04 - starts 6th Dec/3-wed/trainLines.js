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

var trainLines = [
    ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
    ["Flagstaff", "Melbourne Central", "Parliament", "Richmond","Kooyong", "Tooronga"],
    ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]
var alamein = trainLines[0]
var glenWaverly = trainLines[1]
var sandringham = trainLines[2]



function travelPlanner(origin, destination) {

    let journey = "";
    let originIndex = alamein.indexOf(origin);
    let destinationIndex = alamein.indexOf(destination);
    let i = originIndex;
    let counter = 0; 

        while (alamein[i] !== destination) {
                if (originIndex < destinationIndex) {
                    journey = journey + `${alamein[i]} -----> `
                } 
                i++;
                counter++;
            }
            console.log(`origin: ${origin} destination: ${destination}`)
            console.log(journey + destination)
            console.log(`${counter} stops total`)
        }
        
        














    // origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total