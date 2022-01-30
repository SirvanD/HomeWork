// alamaineLine only
// 1. find origin and find destination 
// 2. create route forwards and backwards
// 3. draw map for forward/reverse routes

AlameinLine = ["Flinders Street", "Richmond","East Richmond", "Burnley", "Hawthorn", "Glenferrie"]

function runTrain(origin, destination){
    route = []
    var originIndex = AlameinLine.indexOf(origin)    
    var destinationIndex = AlameinLine.indexOf(destination)
    if (originIndex < destinationIndex) {
        while (originIndex < destinationIndex) {
            route.push(AlameinLine[originIndex])
            originIndex++
        }
       drawticket(origin, destination, route)
    } else {
        while (originIndex > destinationIndex){
            route.push(AlameinLine[destinationIndex])
            destinationIndex++
        }
        drawreverseticket(origin, destination, route)
    }
}

function drawticket(origin, destination, route){
    var routestring = ""
    route.forEach(function(station){
        routestring += `${station} ---> `
    })
    routestring += destination
console.log( 
`Origin: ${origin}
Destination: ${destination}
${routestring}
${route.length} stops total`
)
}

function drawreverseticket(origin, destination, route){
    var routestring = ""
    route.forEach(function(station){
        routestring += `${station} <--- `
    })
    routestring += origin
    console.log( 
`Origin: ${origin}
Destination: ${destination}
${routestring}
${route.length} stops total`
)
}