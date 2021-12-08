var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

function isSameLine(origin,destination){
    if(alamein.indexOf(destination)>=0 && (alamein.indexOf(destination)-alamein.indexOf(origin)) <= alamein.indexOf(destination)){
        return true 
    } else if (glenWaverly.indexOf(destination)>=0 && (glenWaverly.indexOf(destination)-glenWaverly.indexOf(origin)) <= glenWaverly.indexOf(destination)){
        return true 
    } else if (sandringham.indexOf(destination)>=0 && (sandringham.indexOf(destination)-sandringham.indexOf(origin)) <= sandringham.indexOf(destination)){
        return true 
    } else {
        return false
    }
} 

function journey(origin,destination){
    var allStopsR = []
    var allStops = []  

    function toRichmond(station){
        if (alamein.indexOf(station)>=0){
            var richmondIndex1 = alamein.indexOf("Richmond")
            var stationIndex = alamein.indexOf(station)
            var numOfStopsR = richmondIndex1 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex1){
                    allStopsR.push(alamein[index])
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex1){
                    allStopsR.push(alamein[index])
                    index--
                }
            } else {
                allStopsR = ["Richmond"]
            }
        } else if (glenWaverly.indexOf(station)>=0){
            var richmondIndex2 = glenWaverly.indexOf("Richmond")
            var stationIndex = glenWaverly.indexOf(station)
            var numOfStopsR = richmondIndex2 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex2){
                    allStopsR.push(glenWaverly[index])
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex2){
                    allStopsR.push(glenWaverly[index])
                    index--
                }
            } else {
                allStopsR = ["Richmond"]
            }
        } else if (sandringham.indexOf(station)>=0){
            var richmondIndex3 = sandringham.indexOf("Richmond")
            var stationIndex = sandringham.indexOf(station)
            var numOfStopsR = richmondIndex3 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex3){
                    allStopsR.push(sandringham[index])
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex3){
                    allStopsR.push(sandringham[index])
                    index--
                }
            } else {
                allStopsR = ["Richmond"]
            }
        }
        console.log(allStopsR)
    }
    
    if (isSameLine(origin,destination)==true){
        if (alamein.indexOf(origin)>=0){
            var originIndex = alamein.indexOf(origin)
            var destinationIndex = alamein.indexOf(destination)
            var numOfStops = destinationIndex - originIndex
            if(numOfStops > 0){
                var index = originIndex
                while(index <= destinationIndex){
                    allStops.push(alamein[index])
                    index++
                }
            } else if (numOfStops < 0){
                var index = originIndex
                while(index >= destinationIndex){
                    allStops.push(alamein[index])
                    index--
                }
            }
            
        } else if (glenWaverly.indexOf(origin)>=0){
            var originIndex = glenWaverly.indexOf(origin)
            var destinationIndex = glenWaverly.indexOf(destination)
            var numOfStops = destinationIndex - originIndex
            if(numOfStops > 0){
                var index = originIndex
                while(index <= destinationIndex){
                    allStops.push(glenWaverly[index])
                    index++
                }
            } else if (numOfStops < 0) {
                var index = originIndex
                while(index >= destinationIndex){
                    allStops.push(glenWaverly[index])
                    index--
                }
            }
        } else {
            var originIndex = sandringham.indexOf(origin)
            var destinationIndex = sandringham.indexOf(destination)
            var numOfStops = destinationIndex - originIndex
            if(numOfStops > 0){
                var index = originIndex
                while(index <= destinationIndex){
                    allStops.push(sandringham[index])
                    index++
                }
            } else if (numOfStops < 0) {
                var index = originIndex
                while(index >= destinationIndex){
                    allStops.push(sandringham[index])
                    index--
                }
            }
        }
        console.log(allStops)
    } else {
        if (alamein.indexOf(origin)>=0 && glenWaverly.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond(destination)) 
        } else if (alamein.indexOf(origin)>=0 && sandringham.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond("Richmond")) 
            console.log(toRichmond(destination))   
        } else if (glenWaverly.indexOf(origin)>=0 && sandringham.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond(destination))   
        } else  if (glenWaverly.indexOf(origin)>=0 && alamein.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond(destination))   
        } else if (sandringham.indexOf(origin)>=0 && alamein.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond("Richmond")) 
            console.log(toRichmond(destination))   
        } else if (sandringham.indexOf(origin)>=0 && glenWaverly.indexOf(destination)>=0){
            console.log(toRichmond(origin))
            console.log(toRichmond(destination))   
        }   
    }
}



// same line test>   journey("Flinders Street","Hawthorn") journey("Hawthorn","Flinders Street")  journey("Southern Cross", "Windsor")
// different line test> journey("Hawthorn","South Yarra")
