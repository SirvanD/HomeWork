
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
var origin = 'Flinders Street'
var destination = 'Tooronga'




function findLines(origin, destination){
    if(alamein.includes(origin)) {
        line1 = alamein
    } else if(glenWaverly.includes(origin)) {
        line1 = glenWaverly
    } else if(sandringham.includes(origin)) {
        line1 = sandringham
    }
    if(alamein.includes(destination)) {
        line2 = alamein
    } else if(glenWaverly.includes(destination)) {
        line2 = glenWaverly
    } else if(sandringham.includes(destination)) {
        line2 = sandringham
    }
    console.log(`Origin: ${origin} `)
    console.log(`Destination: ${destination}`)
    travelPlanner(line1, line2);
}

function travelPlanner(line1, line2){
    let originIndex = line1.indexOf(origin)
    let destinationIndex = line2.indexOf(destination)


    if(line1 === line2){
        if(originIndex < destinationIndex) {
            newJourney = line1.slice(originIndex, destinationIndex +1)
            stopCount = newJourney.length; 
            newJourneyString = newJourney.join(' ----> ')
            console.log(newJourneyString)

        } else if(originIndex > destinationIndex) {
            newJourney = line1.slice(destinationIndex, originIndex +1)
            stopCount = newJourney.length; 
            newJourneyString = newJourney.join(' <---- ') 
            console.log(newJourneyString) 

        } else if (line1 != line2) {
            let crossOver1 = line1.indexOf('Richmond');
            let crossOver2 = line2.indexOf('Richmond');
            if (originIndex < crossOver1) {
                crossedOverJourney = line1.slice(originIndex, crossOver1 +1);

            } else if (originIndex > crossOver1) {
                crossedOverJourney = line1.slice(crossOver1, originIndex +1);                  
            }
            if (originIndex < crossOver2) {
                crossedOverJourney = line2.slice(originIndex, crossOver2 +1);

            } else if (originIndex > crossOver2) {
                crossedOverJourney = line2.slice(crossOver2, originIndex +1);                  
            }
            console.log(crossedOverJourney);         
        }
    }
}





// function travelPlanner(origin, destination) {

//     let journey = "";
//     let alameinIndex = alamein.indexOf(origin);
//     let glenWaverlyIndex = glenWaverly.indexOf(origin);
//     let sandringhamIndex = sandringham.indexOf(origin);

//     let destinationAlameinIndex = alamein.indexOf(destination);
//     let destinationGlenIndex = glenWaverly.indexOf(destination);
//     let destinationSandyIndex = sandringham.indexOf(destination);
//     let a = alameinIndex;
//     let b = glenWaverlyIndex;
//     let c = sandringhamIndex;

//     let counter = 0; 

//         while (alamein[a] !== destinationAlameinIndex) {
//                 if (alameinIndex < destinationAlameinIndex) {
//                     journey = journey + `${alamein[a]} -----> `
//                 } 
//                 a++;
//                 counter++;
        
//                 if (glenWaverlyIndex[b] !== destinationGlenIndex) {
//                     journey = journey + `${glenWaverly[b]} -----> `
//                 }
//                 b++;
//                 counter++;

//                 if (sandringhamIndex[c] !== destinationSandyIndex) {
//                    journey = journey + `${sandringham[c]} -----> `
//                 }
//                 c++;
//                 counter++;

//                 console.log(`origin: ${origin} destination: ${destination}`)
//                 console.log(journey + destination)
//                 console.log(`${counter} stops total`)
//         }
// }
        


// function travelPlanner(origin, destination) {

//     let journey = "";
//     let originIndex = glenWaverly.indexOf(origin);
//     let destinationIndex = glenWaverly.indexOf(destination);
//     let i = originIndex;
//     let counter = 0; 

//         while (glenWaverly[i] !== destination) {
//                 if (originIndex < destinationIndex) {
//                     journey = journey + `${glenWaverly[i]} -----> `
//                 } 
//                 i++;
//                 counter++;
//             }
//             console.log(`origin: ${origin} destination: ${destination}`)
//             console.log(journey + destination)
//             console.log(`${counter} stops total`)
// }



// function travelPlanner(origin, destination) {

//     let journey = "";
//     let originIndex = sandringham.indexOf(origin);
//     let destinationIndex = sandringham.indexOf(destination);
//     let i = originIndex;
//     let counter = 0; 

//         while (sandringham[i] !== destination) {
//                 if (originIndex < destinationIndex) {
//                     journey = journey + `${sandringham[i]} -----> `
//                 } 
//                 i++;
//                 counter++;
//             }
//             console.log(`origin: ${origin} destination: ${destination}`)
//             console.log(journey + destination)
//             console.log(`${counter} stops total`)

// }








    // origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total