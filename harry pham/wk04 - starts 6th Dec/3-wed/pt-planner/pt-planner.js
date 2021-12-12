var originName = document.querySelector("#origin_name").value
var destinationName = document.querySelector("#destination_name").value
var stationOne = document.querySelector(".train1")
var stationTwo = document.querySelector(".train2")
var stationThree = document.querySelector(".train3")
var totalStops = document.querySelector(".total-stops")
var routeBtn = document.querySelector(".search")
var originOptions = document.querySelectorAll("#origin_name")
var destinationOptions = document.querySelectorAll("#destination_name")
var resetBtn = document.querySelector(".reset")


var transport = [
    alamein= ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly= ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringhan= ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

let firstStation = []
let secondStation = []
let thirdStation = []
let test1 = ""
let test2 = ""
let test3 = ""

var origin = ""
console.log("origin", origin)
var destination = ""
console.log("destination", destination)

function originSelect(event) {
    let originSelected = event.target
    console.log(originSelected)
    origin = originSelected.value
    console.log(origin)
    
}

function destinationSelect(event) {
    let destinationSelected = event.target
    destination = destinationSelected.value
    console.log(destination)
}

function checkRoutes() {
    for(var i=0; i < transport.length; i++) {
        if(transport[i].includes(origin)) {
            console.log("transport location number " + i + " and array number " + transport[i].indexOf(origin))
            var inputOrigin = transport[i].indexOf(origin)
        }
    }

    for(var i=0; i < transport.length; i++) {
        if(transport[i].includes(destination)) {
            if(i === 0 && transport[0].includes(origin)) {
                console.log("transport # ",transport[i].indexOf(destination))
                var inputDestination = transport[i].indexOf(destination)
                firstStation = transport[0].slice(inputOrigin, (inputDestination + 1))
            } else if (i === 1 && transport[0].includes(origin) && origin != "Richmond") {
                var inputDestination = transport[i].indexOf(destination) - 2
                firstStation = transport[0].slice(inputOrigin, (transport[0].indexOf("Richmond") + 1))
                secondStation = transport[1].slice(transport[1].indexOf("Richmond"), (inputDestination + 3))
            } else if (i === 1 && transport[1].includes(origin)) {
                var inputDestination = transport[i].indexOf(destination)  
                secondStation = transport[1].slice(inputOrigin, (inputDestination + 1))
            } else if (i === 2 && transport[0].includes(origin) && origin != "Richmond") {
                var inputDestination = transport[i].indexOf(destination)
                firstStation = transport[0].slice(inputOrigin, (transport[0].indexOf("Richmond") + 1))
                secondStation = transport[1].slice(transport[1].indexOf("Richmond"), 4)
                thirdStation = transport[2].slice(transport[2].indexOf("Richmond"), (inputDestination + 1))
            } else if (i === 2 && transport[1].includes(origin) && origin != "Richmond") {
                var inputDestination = transport[i].indexOf(destination) + 2
                secondStation = transport[1].slice(inputOrigin, (transport[0].indexOf("Richmond") + 1))
                thirdStation = transport[2].slice(transport[2].indexOf("Richmond"), (inputDestination + 1))
            } else if (i ===2 && transport[2].includes(origin)) {
                var inputDestination = transport[i].indexOf(destination)
                thirdStation = transport[2].slice(inputOrigin, (inputDestination + 1))
            }
        }
    }

    originName.textContent = origin
    console.log("input origin ", inputOrigin)
    destinationName.textContent = destination
    console.log("input destination ", inputDestination)


    test1 = firstStation.join(" =====> ")
    console.log("test1", test1)
    console.log("firstStation", firstStation)
    test2 = secondStation.join(" =====> ")
    console.log("test2", test2)
    console.log("secondStation", secondStation)
    test3 = thirdStation.join(" =====> ")
    console.log("test3", test3)
    console.log("thirdStation", thirdStation)


    stationOne.textContent = test1
    stationTwo.textContent = test2
    stationThree.textContent = test3


    var count = inputDestination - inputOrigin 
    console.log("total stops", count)
    totalStops.textContent = count
}

function handleReset() {
    stationOne.textContent = ""
    stationTwo.textContent = ""
    stationThree.textContent = ""
    totalStops.textContent = ""
}

routeBtn.addEventListener("click", checkRoutes)
originOptions.forEach(function(origins) {
    origins.addEventListener("input", originSelect)
})
destinationOptions.forEach(function(destinations) {
    destinations.addEventListener("change", destinationSelect)
})

resetBtn.addEventListener("click", handleReset)



