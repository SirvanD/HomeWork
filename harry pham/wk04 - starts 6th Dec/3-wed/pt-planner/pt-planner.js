var originName = document.querySelector("#origin_name").value
var destinationName = document.querySelector("#destination_name").value
var initialRoute = document.querySelector(".train1")
var finalRoute = document.querySelector(".train2")
var totalStops = document.querySelector(".total-stops")
var routeBtn = document.querySelector(".search")
var originOptions = document.querySelectorAll("#origin_name")
var destinationOptions = document.querySelectorAll("#destination_name")
var resetBtn = document.querySelector(".reset")

var trainLine = [
    alamein= ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly= ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringhan= ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

/*
Flinder Street -> Kooyong = ["Flinder Street", "Richmond", "Kooyong"]
Flinder street -> Melbourne central = ["Flinder Street", "Richmond", "Parliament", "Melbourne Central"]
Burnley -> Kooyong = ["Burnley", "Eash Richmond", "Richmond", "Kooyong"]

Flinder Street -> Prahran = ["Flinder Street", "Richmond", "South Yarra", "Prahran"]
Hawthorn -> Southern Cross = ["Hawthorn", "Burnley", "East Richmond", "Richmond", "Southern Cross"]
South Yarra -> Flinder Street = ["South Yarra", "Richmond", "Flinder Street"]
find distance between origin and richmond, then find distance between richmond and destination
*/

let initialStation = []
let finalStation = []
let thirdStation = []
let initialRouting = ""
let finalRouting = ""
let test3 = ""
var origin = ""
var destination = ""
var originTrainLine = 0
var originIndex = 0
var destinationTrainLine = 0
var destinationIndex = 0

function originSelect(event) {
    let originSelected = event.target
    origin = originSelected.value
}
// can join
function destinationSelect(event) {
    let destinationSelected = event.target
    destination = destinationSelected.value
    console.log(event)
}

function setPoint(type, station) {
    console.log(station)
    console.log(trainLine)
    for(var i=0; i < trainLine.length; i++) {
        if(trainLine[i].includes(station)) {
            if (type == "origin") {
                originTrainLine = i
                originIndex = trainLine[i].indexOf(station)
            }
            if (type == "destination") {
                destinationTrainLine = i
                destinationIndex = trainLine[i].indexOf(station)
            }
        }
    }
}

function checkRoutes() {
    setPoint("origin", origin)
    setPoint("destination", destination)

    console.log("origin Train Line", originTrainLine)
    console.log("destination Train Line", destinationTrainLine)
    if(originTrainLine === destinationTrainLine) {
        if(destinationIndex < originIndex) {
            var reversed = trainLine[originTrainLine].reverse()
            initialStation = reversed.slice(trainLine[originTrainLine].indexOf(origin), trainLine[originTrainLine].indexOf(destination) + 1)
        } else {
            initialStation = trainLine[originTrainLine].slice(originIndex, destinationIndex + 1)
        }
    } else {
        if(originTrainLine == 0 && originIndex > 1 || originTrainLine == 1 && originIndex > 3 || originTrainLine == 2 && originIndex > 1) {
            var reversed = trainLine[originTrainLine].reverse()
            initialStation = reversed.slice(trainLine[originTrainLine].indexOf(origin), trainLine[originTrainLine].indexOf("Richmond") + 1)
        } else {
            initialStation = trainLine[originTrainLine].slice(originIndex, trainLine[originTrainLine].indexOf("Richmond") + 1)
            console.log(initialStation)
            // finalStation = trainLine[destinationTrainLine].slice(trainLine[destinationTrainLine].indexOf("Richmond"), destinationIndex + 1)
            console.log(finalStation)
        }
        if(destinationTrainLine == 0 && destinationIndex > 1 || destinationTrainLine == 1 && destinationIndex > 3 || destinationTrainLine == 2 && destinationIndex > 1) {
            finalStation = trainLine[destinationTrainLine].slice(trainLine[destinationTrainLine].indexOf("Richmond"), destinationIndex + 1)
        } else {
            var reversed = trainLine[destinationTrainLine].reverse()
            finalStation = reversed.slice(trainLine[destinationTrainLine].indexOf("Richmond"), trainLine[destinationTrainLine].indexOf(destination) + 1)
        }
    }
    console.log("initial station", initialStation)
    console.log("final station", finalStation)
    initialRouting = initialStation.join(" =====> ")
    finalRouting = finalStation.join(" =====> ")

    if(initialStation.length !== 1) {
        initialRoute.textContent = initialRouting

    }
    if(finalStation.length !== 1) {
        finalRoute.textContent = finalRouting
    }

    if(originTrainLine === destinationTrainLine) {
        var count =  finalStation.length + initialStation.length - 1
        totalStops.textContent = count
    } else {
        var count =  finalStation.length + initialStation.length - 2
        totalStops.textContent = count
    }
    routeBtn.disabled = true
}

function handleReset() {
    initialRoute.textContent = ""
    finalRoute.textContent = ""
    totalStops.textContent = ""
    routeBtn.disabled = false
}

routeBtn.addEventListener("click", checkRoutes)
originOptions.forEach(function(origins) {
    origins.addEventListener("input", originSelect)
})
destinationOptions.forEach(function(destinations) {
    destinations.addEventListener("input", destinationSelect)
})

resetBtn.addEventListener("click", handleReset)



