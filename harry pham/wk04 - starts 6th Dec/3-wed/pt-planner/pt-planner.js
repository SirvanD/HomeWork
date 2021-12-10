var transport = [
    alamein= ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly= ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringhan= ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

let newAlamein = transport[0]



var origin = "Flinders Street"
console.log("origin", origin)
var destination = "Richmond"
console.log("destination", destination)



for(var i=0; i < transport.length; i++) {
    if(transport[i].includes(origin)) {
        console.log("transport location number " + i + " and array number " + transport[i].indexOf(origin))
        var inputOrigin = transport[i].indexOf(origin)
    }
}

for(var i=0; i < transport.length; i++) {
    if(transport[i].includes(destination)) {
        if(i === 0) {
            console.log("transport # ",transport[i].indexOf(destination))
            var inputDestination = transport[i].indexOf(destination)
        } else if (i === 1 && transport[0].includes(origin)) {
            var inputDestination = transport[i].indexOf(destination) - 2
        } else if (i === 1 && transport[1].includes(origin)) {
            var inputDestination = transport[i].indexOf(destination)  
        } else if (i === 2 && transport[0].includes(origin)) {
            var inputDestination = transport[i].indexOf(destination)
        } else if (i === 2 && transport[1].includes(origin)) {
            var inputDestination = transport[i].indexOf(destination) + 2
        } else if (i ===2 && transport[2].includes(origin)) {
            var inputDestination = transport[i].indexOf(destination)
        }
    }
}

function 
i=alamein.length - 1
while(newAlamein[i] != destination) {
    newAlamein.pop()
    i--
}



console.log("input origin ", inputOrigin)
console.log("input destination ", inputDestination)
var count = inputDestination - inputOrigin 
console.log("total stops", count)