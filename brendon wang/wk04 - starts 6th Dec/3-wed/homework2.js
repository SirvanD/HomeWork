AlameinLine = ["Flinders Street", "Richmond","East Richmond", "Burnley", "Hawthorn", "Glenferrie"]

GlenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]

Sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]

var Melbtrains = [AlameinLine, GlenWaverly, Sandringham]

// multiple trains
// 1. find origin and destination between all 3 trains
// 2a. if same train generate direct route
// 2b. if different trains, generate half routes for origin/destination paths going to Richmond 
// 3. draw path for the consoles 

function runMultipleTrains (origin, destination){
    var originArray = ""
    var originIndex = ""
    var destinationArray = ""
    var destinationIndex = ""
    Melbtrains.forEach(function(array){
        if (array.includes(origin)){
            originArray = array
            originIndex = array.indexOf(origin)
            console.log (originIndex + " O index")
            console.log (originArray + " O array")
        }
    }) 
    Melbtrains.forEach(function(array){
        if (array.includes(destination)){
            destinationArray = array
            destinationIndex = array.indexOf(destination)
            console.log(destinationIndex + " D index")
            console.log(destinationArray + " D Array")
        }
    })
    generateRoute(originIndex, originArray, destinationIndex, destinationArray)
}

function generateRoute(originIndex, originArray,  destinationIndex, destinationArray) {
    if (originArray.toString() == destinationArray.toString()){
        directRoute(originIndex, destinationIndex, originArray)
    }
    else {
        generateHalfRoute(originIndex, originArray)
        var originRoute = halfRoute
        generateHalfRoute(destinationIndex, destinationArray)
        var destinationRoute = halfRoute
    } if (originIndex < originArray.indexOf("Richmond")){
        drawTicketForward(originArray[originIndex], destinationArray[destinationIndex], originRoute)
    } else {
        drawTicketReverse(originArray[originIndex], destinationArray[destinationIndex], originRoute)
    } if (originIndex < originArray.indexOf("Richmond")){
        drawTicketForward(originArray[originIndex], destinationArray[destinationIndex], destinationRoute)
    } else {
        drawTicketReverse(originArray[originIndex], destinationArray[destinationIndex], destinationRoute)
    }
}

function directRoute(originIndex, destinationIndex, originArray){
    console.log("runningdirect")
    route = []
    var origin = originArray[originIndex]
    var destination = originArray[destinationIndex]
    if (originIndex < destinationIndex) {
        while (originIndex <= destinationIndex) {
            route.push(originArray[originIndex])
            originIndex++
        }
    } else {
        while (originIndex >= destinationIndex){
            route.push(originArray[destinationIndex])
            destinationIndex++
        }
    }
    drawDirectTicket(origin, destination, route, originArray)
}

function generateHalfRoute(Index, Array){
    halfRoute = []
    Melbtrains.forEach(function(trainline){
        if (Array.toString() == trainline.toString()){
            while (Index < trainline.indexOf("Richmond")) {
                halfRoute.push(Array[Index]);
                Index++;
            } while (Index > trainline.indexOf("Richmond")) {
                halfRoute.push(Array[Index])
                Index--;
            } 
        }
    })
    halfRoute.push("Richmond")
    return halfRoute
}


function drawDirectTicket(origin, destination, route, originArray){
    var routeString = ""
    console.log(route)
    if (originArray.indexOf(origin) < originArray.indexOf(destination)){
        for (let i = 0; i < route.length-1 ; i++){
            routeString += `${route[i]} --->`
        }
        routeString += destination
    console.log( 
    `Origin: ${origin}
    Destination: ${destination}
    ${routeString}
    ${route.length} stops total`
    )
    } else {
        for (let i = 0; i < route.length-1 ; i++){
            routeString += `${route[i]} <---`
        }
        routeString += origin
    console.log( 
    `Origin: ${origin}
    Destination: ${destination}
    ${routeString}
    ${route.length} stops total`
    )
    }
}

function drawTicketForward(origin, destination, route){
    var routeString = ""
    console.log(route)
    for (let i = 0; i < route.length-1 ; i++){
        routeString += `${route[i]} --->`
    }
    routeString += "Richmond"
console.log( 
`Origin: ${origin}
Destination: ${destination}
${routeString}
${route.length} stops total`
)
}

function drawTicketReverse(origin, destination, route){
    var routeString = ""
    console.log(route)
    for (let i = 0; i < route.length-1 ; i++){
        routeString += `${route[i]} <---`
    }
    routeString += "Richmond"
console.log( 
`Origin: ${origin}
Destination: ${destination}
${routeString}
${route.length} stops total`
)
}