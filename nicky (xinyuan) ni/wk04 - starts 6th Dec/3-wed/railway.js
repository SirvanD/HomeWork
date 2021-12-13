var alameindiv = document.getElementsByClassName('alamein');
var glenWaverlydiv = document.getElementsByClassName('glenWaverly');
var sandringhamdiv = document.getElementsByClassName('sandringham');
var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];


function start(){
    var origin = document.getElementById('origin').value
    var destination = document.getElementById('destination').value
    journey(origin,destination)
}

function restart(){
    for(var index = 0; index < 6; index++){
        document.getElementsByClassName('alamein')[index].style.backgroundColor = "transparent";
        document.getElementsByClassName('alamein')[index].style.color = "transparent";
        document.getElementsByClassName('arrows-a')[index].textContent = "";
    }
    for(var index = 0; index < 6; index++){
        document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "transparent";
        document.getElementsByClassName('glenWaverly')[index].style.color = "transparent";
        document.getElementsByClassName('arrows-b')[index].textContent = "";
    }
    for(var index = 0; index < 5; index++){
        document.getElementsByClassName('sandringham')[index].style.backgroundColor = "transparent";
        document.getElementsByClassName('sandringham')[index].style.color = "transparent";
        document.getElementsByClassName('arrows-c')[index].textContent = "";
    }
}

function isSameLine(origin,destination){
    if(origin == "Richmond" || destination == "Richmond"){
        return true 
    } else  if(alamein.indexOf(destination)>=0 && (alamein.indexOf(destination)-alamein.indexOf(origin)) <= alamein.indexOf(destination)){
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
  
    function toRichmond(station){
        if (alamein.indexOf(station)>=0){
            var richmondIndex1 = alamein.indexOf("Richmond")
            var stationIndex = alamein.indexOf(station)
            var numOfStopsR = richmondIndex1 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex1){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = ">";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex1){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = "<";
                    index--
                }
            } 
        } else if (glenWaverly.indexOf(station)>=0){
            var richmondIndex2 = glenWaverly.indexOf("Richmond")
            var stationIndex = glenWaverly.indexOf(station)
            var numOfStopsR = richmondIndex2 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex2){
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = ">";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex2){
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = "<";
                    index--
                }
            } 
        } else if (sandringham.indexOf(station)>=0){
            var richmondIndex3 = sandringham.indexOf("Richmond")
            var stationIndex = sandringham.indexOf(station)
            var numOfStopsR = richmondIndex3 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex3){
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = ">";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex3){
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = "<";
                    index--
                }
            } 
        }
    }

    function fromRichmond(station){
        if (alamein.indexOf(station)>=0){
            var richmondIndex1 = alamein.indexOf("Richmond")
            var stationIndex = alamein.indexOf(station)
            var numOfStopsR = richmondIndex1 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex1){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = "<-";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex1){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = "->";
                    index--
                }
            } 
        } else if (glenWaverly.indexOf(station)>=0){
            var richmondIndex2 = glenWaverly.indexOf("Richmond")
            var stationIndex = glenWaverly.indexOf(station)
            var numOfStopsR = richmondIndex2 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex2){
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = "<-";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex2){
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = "->";
                    index--
                }
            } 
        } else if (sandringham.indexOf(station)>=0){
            var richmondIndex3 = sandringham.indexOf("Richmond")
            var stationIndex = sandringham.indexOf(station)
            var numOfStopsR = richmondIndex3 - stationIndex
            if(numOfStopsR > 0){
                var index = stationIndex
                while(index <= richmondIndex3){
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = "<-";
                    index++
                }
            } else if (numOfStopsR < 0){
                var index = stationIndex
                while(index >= richmondIndex3){
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = "->";
                    index--
                }
            } 
        }
    }
    
    if (isSameLine(origin,destination)==true){
        if (alamein.indexOf(origin)>=0){
            var originIndex = alamein.indexOf(origin)
            var destinationIndex = alamein.indexOf(destination)
            var numOfStops = destinationIndex - originIndex
            if(numOfStops > 0){
                var index = originIndex
                while(index <= destinationIndex){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = "->";
                    index++
                }
            } else if (numOfStops < 0){
                var index = originIndex
                while(index >= destinationIndex){
                    document.getElementsByClassName('alamein')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('alamein')[index].style.color = "white";
                    document.getElementsByClassName('arrows-a')[index].textContent = "<-";
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
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = "->";
                    index++
                }
            } else if (numOfStops < 0) {
                var index = originIndex
                while(index >= destinationIndex){
                    document.getElementsByClassName('glenWaverly')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('glenWaverly')[index].style.color = "white";
                    document.getElementsByClassName('arrows-b')[index].textContent = "<-";
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
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = "->";
                    index++
                }
            } else if (numOfStops < 0) {
                var index = originIndex
                while(index >= destinationIndex){
                    document.getElementsByClassName('sandringham')[index].style.backgroundColor = "orangered";
                    document.getElementsByClassName('sandringham')[index].style.color = "white";
                    document.getElementsByClassName('arrows-c')[index].textContent = "<-";
                    index--
                }
            }
        }
    } else {
        if (alamein.indexOf(origin)>=0 && glenWaverly.indexOf(destination)>=0){
            toRichmond(origin)
            fromRichmond(destination) 
        } else if (alamein.indexOf(origin)>=0 && sandringham.indexOf(destination)>=0){
            toRichmond(origin)
            document.getElementsByClassName('glenWaverly')[3].style.backgroundColor = "orangered";
            document.getElementsByClassName('glenWaverly')[3].style.color = "white";
            fromRichmond(destination)   
        } else if (glenWaverly.indexOf(origin)>=0 && sandringham.indexOf(destination)>=0){
            toRichmond(origin)
            fromRichmond(destination)  
        } else  if (glenWaverly.indexOf(origin)>=0 && alamein.indexOf(destination)>=0){
            toRichmond(origin)
            fromRichmond(destination)  
        } else if (sandringham.indexOf(origin)>=0 && alamein.indexOf(destination)>=0){
            toRichmond(origin)
            document.getElementsByClassName('glenWaverly')[3].style.backgroundColor = "orangered";
            document.getElementsByClassName('glenWaverly')[3].style.color = "white";
            fromRichmond(destination) 
        } else if (sandringham.indexOf(origin)>=0 && glenWaverly.indexOf(destination)>=0){
            toRichmond(origin)
            fromRichmond(destination)  
        }   
    }
}

