var MelbourneStations = [
    alamein_line = [`Flinders Street`, `Richmond`, `East Richmond`, `Burnley`, `Hawthorn`, `Glenferrie`],
    glen_waverley_line = [`Flagstaff`, `Melbourne Central`, `Parliament`, `Richmond`, `Kooyong`, `Tooronga`],
    Sandringham_line = [`Southern Cross`, `Richmond`, `South Yarra`, `Prahran`, `Windsor`]
]

function trainTravel (getOn, getOff) {

    // var trip = MelbourneStations.indexOf(getOn)
    // var trip2 = MelbourneStations[0].alamein_line.indexOf(getOff)

    return MelbourneStations[0].indexOf(`Flinders Street`)


    if (getOn == getOff) {
        console.log(`${getOn} --> ${getOff}`)
    }
}


//console.log(MelbourneStations[0].slice(MelbourneStations.indexOf(getOn), MelbourneStations.indexOf(getOff)))




// var startDestination = MelbourneStations.alamein_line.indexOf(getOn)
// var stopDestination = MelbourneStations.alamein_line.indexOf(getOff)
