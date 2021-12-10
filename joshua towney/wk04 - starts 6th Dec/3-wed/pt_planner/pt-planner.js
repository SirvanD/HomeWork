function trainRide(origin,destination) {
    var trainLines = {
        alamein: ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'],
        glenWaverly: ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'],
        sandringham: ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
    }
    var originToLower = origin.toLowerCase();
    var originSplit = originToLower.split(" ");
    var originCapitalized = [];

    for (let i = 0; i < originSplit.length; i++) {
        originCapitalized.push(originSplit[i][0].toUpperCase() + originSplit[i].slice(1));
    }
    
    var getOn = originCapitalized.join(" ");
    var destinationToLower = destination.toLowerCase();
    var destinationSplit = destinationToLower.split(" ");
    var destinationCapitalized = [];

    for (let i = 0; i < destinationSplit.length; i++) {
        destinationCapitalized.push(destinationSplit[i][0].toUpperCase() + destinationSplit[i].slice(1));
    }
    var getOff = destinationCapitalized.join(" ");
    var legOne = [];
    var legTwo = [];
    var unbrokenRoute = [];
    var startingLine = [];
    var finishLine = [];

    if (trainLines.alamein.includes(getOn)) {
        startingLine = trainLines.alamein;
    } else if (trainLines.glenWaverly.includes(getOn)) {
        startingLine = trainLines.glenWaverly;
    } else if (trainLines.sandringham.includes(getOn)) {
        startingLine = trainLines.sandringham;
    } else {
        return "Either your origin or destination was spelt incorrectly. Your card has not ben charged. Have a great day";
    }

    if (trainLines.alamein.includes(getOff)) {
        finishLine = trainLines.alamein;
    } else if (trainLines.glenWaverly.includes(getOff)) {
        finishLine = trainLines.glenWaverly;
    } else if (trainLines.sandringham.includes(getOff)) {
        finishLine = trainLines.sandringham;
    } else {
        return "Either your origin or destination was spelt incorrectly. Your card has not ben charged. Have a great day";
    }
   
    if (startingLine.includes(getOff)) {
        if(startingLine.indexOf(getOn) < startingLine.indexOf(getOff)) {
            for (i = startingLine.indexOf(getOn); i <= startingLine.indexOf(getOff); i++ ) {
                unbrokenRoute.push(startingLine[i]);
            }
        } else {
            for (i = startingLine.indexOf(getOn); i >= startingLine.indexOf(getOff); i-- ) {
                unbrokenRoute.push(startingLine[i]);
            }
        }
    } else {
        if (startingLine.indexOf(getOn) < startingLine.indexOf('Richmond')) { 
            for (i = startingLine.indexOf(getOn); i <= startingLine.indexOf('Richmond'); i++ ) {
                legOne.push(startingLine[i]);
            }
        } else {
            for (i = startingLine.indexOf(getOn); i >= startingLine.indexOf('Richmond'); i-- ) {
                legOne.push(startingLine[i]);
        }
    }
        if (finishLine.indexOf('Richmond') < finishLine.indexOf(getOff)) {
            for (i = finishLine.indexOf('Richmond'); i <= finishLine.indexOf(getOff) + 1; i++ ) {
                legTwo.push(finishLine[i]);
            }
        } else {
            for (i = finishLine.indexOf('Richmond'); i >= finishLine.indexOf(getOff) - 1; i-- ) {
                legTwo.push(finishLine[i]);
            }
        }
    }

    if (legTwo[-1] == undefined) {
        legTwo.pop();
    }
    
    if (startingLine.includes(getOff)) {
        var numberOfStops = (unbrokenRoute.length - 1);
        var mappedRoute = unbrokenRoute.join(' ---> ');
        console.log('origin: ' + getOn);
        console.log('destination: ' + getOff);
        console.log(mappedRoute);
        console.log(numberOfStops + " stops total");
    } else {
        var numberOfStops = ((legOne.length - 1) + (legTwo.length - 1));
        var legOneRoute = legOne.join(' ---> ');
        var legTwoRoute = legTwo.join(' ---> ');
        console.log('origin: ' + getOn);
        console.log('destination: ' + getOff);
        console.log(legOneRoute);
        console.log((" ".repeat(legOneRoute.length - 8)) + legTwoRoute);
        console.log(numberOfStops + " stops total")
    }
} 