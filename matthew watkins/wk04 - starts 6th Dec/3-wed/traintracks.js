var MelbourneStations = {
    alamein_line: [`Flinders Street`, `Richmond`, `East Richmond`, `Burnley`, `Hawthorn`, `Glenferrie`],
    glen_waverley_line: [`Flagstaff`, `Melbourne Central`, `Parliament`, `Richmond`, `Kooyong`, `Tooronga`],
    Sandringham_line: [`Southern Cross`, `Richmond`, `South Yarra`, `Prahran`, `Windsor`]
}


//var track = alamein_line.indexOf(`Richmond`)

function trainTrip(geton, getoff) {
    //use object.entries to turn the object into a
    var station = MelbourneStations.alamein_line.indexOf(geton)
    var stop = MelbourneStations.alamein_line.indexOf(getoff)
    var trainTrack = []
    var counter = 0 
    //indexof geton.indexOf()
    //using indexOf() function this returns a string
    //we then use this number that is returned to loop to the get off station
    for(let i = station; i <= stop; i++){
        trainTrack.push(MelbourneStations.alamein_line[i])
        counter++
    }
    console.log(
        `origin: ${geton}
        destination: ${getoff}
        ${trainTrack.join(`-->`)}.
        ${counter} stops in total`
        
        )
    // if indexof "richmond"



}
trainTrip('Flinders Street', 'East Richmond')

