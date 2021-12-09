var numOfStops = 0

// maybe an array of arrays?

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

var origin = ""
var destination = ""
var route = ""





// MAKE THIS GO BACKWARDS!! I DID IT
// IF THE INDEX OF THE ORIGIN IS BIGGER THAN THE INDEX OF THE DESTINATION
// REVERSE THE ARRAY BECAUSE THEN ITLL STILL GO FORWARDS!
function singleLineJourney(array){
    console.log (`origin: ${origin}`)
    console.log (`destination: ${destination}`)
    
    if (array.indexOf(origin) > array.indexOf(destination)){
        array.reverse()
    }
    var stopsArray = array.slice(array.indexOf(origin), array.indexOf(destination))
    for (let i = array.indexOf(origin); i <= array.indexOf(destination); i++){
        route += `${array[i]}`   
        if(i !== array.indexOf(destination)){
            route += "  ----->  "
        }
    }
    console.log(route)
    console.log(`Total stops: ${stopsArray.length}`)
    
}


function journey(userOrigin, userDestination){
    route = ""
    origin = userOrigin
    destination = userDestination

    if (alamein.includes(origin) && alamein.includes(destination)){
        singleLineJourney(alamein)
    } else if (glenWaverly.includes(origin) && glenWaverly.includes(destination)){
        singleLineJourney(glenWaverly)
    } else if (sandringham.includes(origin) && sandringham.includes(destination)){
        singleLineJourney(sandringham)
    } else {
        console.log (`origin: ${origin}`)
        console.log (`destination: ${destination}`)
        findLines(origin, destination);

        var routes = concatAndSliceArrays(line1, line2);
        console.log(routes.line1.join(' ----> '))
        console.log(`${gimmeSpaces(routes.line1.join(' ----> ').length -5 )} || `)
        console.log(`${gimmeSpaces(routes.line1.join(' ----> ').length -8 )} ${routes.line2.join(' ----> ')}`)
        console.log(`Total stops: ${routes.line1.length + routes.line2.length -2}`)
    } 
}


//this for some reason doesn't slice properly? I'll have to try it later
function concatAndSliceArrays(trainLine1, trainLine2){
    var routes = {
        line1: [],
        line2: []
    }
    if (trainLine1.indexOf(origin) > trainLine1.indexOf("Richmond")){
        trainLine1.reverse()
    }
    var trainLine1Sliced = trainLine1.slice(trainLine1.indexOf(origin), (trainLine1.indexOf("Richmond")+1))
    if (trainLine2.indexOf("Richmond") > trainLine2.indexOf(destination)){
        trainLine2.reverse()
    }
    var trainLine2Sliced = trainLine2.slice(trainLine2.indexOf("Richmond"), (trainLine2.indexOf(destination)+1))

    routes.line1 = trainLine1Sliced
    routes.line2 = trainLine2Sliced

    return routes
}


function findLines(origin, destination){
    line1 = []
    line2 = []
    if (alamein.includes(origin)){
        line1 = alamein
    } else if (glenWaverly.includes(origin)){
        line1 = glenWaverly
    } else if (sandringham.includes(origin)){
        line1 = sandringham
    }
    if (alamein.includes(destination)){
        line2 = alamein
    } else if (glenWaverly.includes(destination)){
        line2 = glenWaverly
    } else if (sandringham.includes(destination)){
        line2 = sandringham
    }
}

//could make the array join, then use the slice, to cut off all stations that dont apply? then concat two arrays together from richmond? 

// find the two arrays needed
// manipulate both to be in the "right" direction
// chop off un-needed stations

//WATCH OUT FOR REVERSE COS IT MUTATES THE WHOLE THING PERM. REREAD MY CODE TO SEE IF THATS AN ISSUE


// length to the end of the FIRST array string, new line
// that many blanks minus 5 char + 2 pipes 
// array 2 lines

// 

function gimmeSpaces(lineStrLength){
    let str = "";
    for (let i = 0; i <lineStrLength; i++){
        str += " "
    }
    return str
}