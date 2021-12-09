var numOfStops = 0

// maybe an array of arrays?

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

var origin = ""
var destination = ""
var route = ""

var newArray = []
var line1 = []
var line2 = []



// MAKE THIS GO BACKWARDS!! I DID IT
// IF THE INDEX OF THE ORIGIN IS BIGGER THAN THE INDEX OF THE DESTINATION
// REVERSE THE ARRAY BECAUSE THEN ITLL STILL GO FORWARDS!
function singleLineJourney(array){
    console.log (`origin: ${origin}`)
    console.log (`destination: ${destination}`)
    
    if (array.indexOf(origin) > array.indexOf(destination)){
        array.reverse()
    }
    for (let i = array.indexOf(origin); i <= array.indexOf(destination); i++){
        route += `${array[i]}`   
        if(i !== array.indexOf(destination)){
            route += "  ----->  "
        }
    }
    console.log(route)
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
        concatAndSliceArrays(line1, line2);
        for (let i = newArray.indexOf(origin); i <= newArray.indexOf(destination); i++){
            debugger
            if (newArray.indexOf(newArray[i]) == newArray.lastIndexOf("Richmond")){
                route += " HERE I AM "
            } 
            route += `${newArray[i]}`
            if(i !== newArray.indexOf(destination)){
                route += "  ----->  "
            }
        }
        console.log(route)
    }
    
    

}


//this for some reason doesn't slice properly? I'll have to try it later
function concatAndSliceArrays(array1, array2){
    newArray = []
    if (array1.indexOf(origin) > array1.indexOf("Richmond")){
        array1.reverse()
    }
    array1Sliced = array1.slice(array1.indexOf(origin), (array1.indexOf("Richmond")+1))
    if (array2.indexOf("Richmond") > array2.indexOf(destination)){
        array2.reverse()
    }
    array2Sliced = array2.slice(array2.indexOf("Richmond"), (array2.indexOf(destination)+1))
    array3 = array1Sliced.concat(array2Sliced)
    if (array3.indexOf(origin) > array3.indexOf(destination)){
        array3.reverse()
    }
    newArray = array3.slice(array3.indexOf(origin), (array3.indexOf(destination)+1))
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