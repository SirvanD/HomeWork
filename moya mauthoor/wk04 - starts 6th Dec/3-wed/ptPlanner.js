// Just thinking about potential data structures for this exercise
let lines = [
    flindersStreetLine = {
        stop1:  "Flinders Street",
        stop2: {
            station: "Richmond",
            flagstaffLineStations: {
                stop5: "Kooyong",
                stop6: "Tooronga"
            },
            southernCrossLineStations: {
                stop3: "South Yarra",
                stop4: "Prahran",
                stop5: "Windsor"
            }
        },
        stop3: "East Richmond",
        stop4: "Burnley",
        stop5: "Hawthorn",
        stop6: "Glenferrie"
    },
    flagstaffLine = {
        stop1: "Flagstaff",
        stop2: "Melbourne Central",
        stop3: "Parliament",
        stop4: flindersStreetLine.stop2.station,
        stop5: flindersStreetLine.stop2.flagstaffLineStations.stop5,
        stop6: flindersStreetLine.stop2.flagstaffLineStations.stop6
    },
    southernCrossLine = {
        stop1: "Southern Cross",
        stop2: flindersStreetLine.stop2.station,
        stop3: flindersStreetLine.stop2.southernCrossLineStations.stop3,
        stop4: flindersStreetLine.stop2.southernCrossLineStations.stop4,
        stop5: flindersStreetLine.stop2.southernCrossLineStations.stop5
    }
]



function planJourney(origin, destination) {

    // Will probably need a counter for the number of stops
    // Will need to loop through multiple objects in an array and search through each of them to find a specific value


    
} 
console.log(lines[2].stop2)

// planJourney("Flinders Street", "Burnley")




