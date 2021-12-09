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
// Resources
// Here's a map of the train network to help
function ptPlanner(origin, destination) {
    var Alamein = "Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie".split(" - ")
    var GlenWaverly = "Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga".split(" - ")
    var Sandringham = "Southern Cross - Richmond - South Yarra - Prahran - Windsor".split(" - ")
    var AL = Alamein.slice(0, 2)
    var AR = Alamein.slice(1).reverse()
    var GL = GlenWaverly.slice(0, 4)
    var GR = GlenWaverly.slice(3).reverse()
    var SL = Sandringham.slice(0, 2)
    var SR = Sandringham.slice(1).reverse()
    var all = [AL, GL, SL, AR, GR, SR]
    var newOrigin = []
    var newDestination = []
    var route = []
    var displayRoute = ""
    var numOfStops

    // First three if-elseif blocks" are for if both stops are from the same line
    if (Alamein.indexOf(origin) != -1 && Alamein.indexOf(destination) != -1) {
        numOfStops = Alamein.indexOf(destination) - Alamein.indexOf(origin);
        if (numOfStops < 0) {
            numOfStops = -numOfStops
        }
        if (Alamein.indexOf(origin) > Alamein.indexOf(destination)) {
            route = Alamein.slice(Alamein.indexOf(destination), Alamein.indexOf(origin) + 1)
        } else {
            route = Alamein.slice(Alamein.indexOf(origin), Alamein.indexOf(destination) + 1)
        }
        displayRoute = route.join(" -----> ");
    } else if (GlenWaverly.indexOf(origin) != -1 && GlenWaverly.indexOf(destination) != -1) {
        numOfStops = GlenWaverly.indexOf(destination) - GlenWaverly.indexOf(origin);
        if (numOfStops < 0) {
            numOfStops = -numOfStops
        }
        if (GlenWaverly.indexOf(origin) > GlenWaverly.indexOf(destination)) {
            route = GlenWaverly.slice(GlenWaverly.indexOf(destination), GlenWaverly.indexOf(origin) + 1)
        } else {
            route = GlenWaverly.slice(GlenWaverly.indexOf(origin), GlenWaverly.indexOf(destination) + 1)
        }
        displayRoute = route.join(" -----> ");
    } else if (Sandringham.indexOf(origin) != -1 && Sandringham.indexOf(destination) != -1) {
        numOfStops = Sandringham.indexOf(destination) - Sandringham.indexOf(origin);
        if (numOfStops < 0) {
            numOfStops = -numOfStops
        }
        if (Sandringham.indexOf(origin) > Sandringham.indexOf(destination)) {
            route = Sandringham.slice(Sandringham.indexOf(destination), Sandringham.indexOf(origin) + 1)
        } else {
            route = Sandringham.slice(Sandringham.indexOf(origin), Sandringham.indexOf(destination) + 1);
        }
        displayRoute = route.join(" -----> ");
        // from here on, stops are from different train lines. Each line was made into 2 arrays (left and right of Richmond), and 6 arrays in were put into one big array called "all".
    } else {
        for (let i = 0; i < 6; i++) {
            if (all[i].indexOf(origin) != -1) {
                newOrigin = all[i].slice(all[i].indexOf(origin))
            }
        }
        for (let i = 0; i < 6; i++) {
            if (all[i].indexOf(destination) != -1) {
                newDestination = all[i].slice(all[i].indexOf(destination)).reverse()
            }
        }

        route = [].concat(newOrigin, newDestination);
        numOfStops = route.length - 2;
        // here on, thanks to Sean, telling me how to align them pretty, but is twicking spaces really necessary or there are better ways?
        displayRoute = `${newOrigin.join(" -----> ")}
    ${whiteSpace(newOrigin.join(" -----> ").length - 5)}|| 
    ${whiteSpace(newOrigin.join(" -----> ").length - 9)} ${newDestination.join(" -----> ")}`
    }
    return `    origin: ${origin}
    destination: ${destination}

    ${displayRoute}

    ${numOfStops} stops total`
}

function whiteSpace(number) {
    let string = ""
    for (let i = 0; i < number; i++) {
        string += " "
    }
    return string
}

ptPlanner("Melbourne Central", "Windsor")
