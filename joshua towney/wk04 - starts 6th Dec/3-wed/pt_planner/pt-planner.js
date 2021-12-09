//train lines
// var alamein = ['Flinders Street','Richmond','East Richmond','Burnley','Kooyong','Glenferrie'];
// var glenWaverly = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'];
// var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];

//9 possible routes
// var route1 = ['Flinders Street','Richmond','East Richmond','Burnley','Kooyong','Glenferrie']
// var route2 = ['Flinders Street','Richmond','Kooyong','Tooronga']
// var route3 = ['Flinders Street','Richmond','South Yarra','Prahran','Windsor']
// var route4 = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga']
// var route5 = ['Flagstaff','Melbourne Central','Parliament','Richmond','Burnley','Kooyong','Glenferrie']
// var route6 = ['Flagstaff','Melbourne Central','Parliament','Richmond','South Yarra','Prahran','Windsor']
// var route7 = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
// var route8 = ['Southern Cross','Richmond','Burnley','Kooyong','Glenferrie']
// var route9 = ['Southern Cross','Richmond','Kooyong','Tooronga']

var trainLines = {
    alamein: ['Flinders Street','Richmond','East Richmond','Burnley','Kooyong','Glenferrie'],
    glenWaverly: ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'],
    sandringham: ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
}

//indexOf() can find the position of the stop on the array
//toUpperCase/lowercase to ensure the word is correct either way
//booleans needed to know if we can reach destination from origin on same track
//includes() can work this out

function trip(getOn) {

    var originToLower = getOn.toLowerCase();
    var words = originToLower.split(" ");
    var wordsCapitalized = [];

    for (let i = 0; i < words.length; i++) {
        wordsCapitalized.push(words[i][0].toUpperCase() + words[i].slice(1));
        console.log(wordsCapitalized);
    }
    var trueGetOn = wordsCapitalized.join(" ");

    if (trainLines.alamein.includes(trueGetOn)) {
        console.log("Start on Alemain line");
    } else if (trainLines.glenWaverly.includes(trueGetOn)) {
        console.log("Start on Glen Waverly Line");
    } else if (trainLines.sandringham.includes(trueGetOn)) {
        console.log('Start on Sandringham line');
    } else {
        console.log("Not a station. Goodbye");
    }
} 




// function trip(getOn, getOff) {
//     var route = [];

//     for (i = route1.indexOf(getOn); i <= route1.indexOf(getOff) + 1; i++ ) {
//         route.push(route1[i]);
//     }
//     route.pop();
//     if (route[0] == undefined) {
//         route.shift()
//     }
//     console.log(route);

//     var numberOfStops = (route.length - 1);
//     var mappedRoute = route.join(' ---> ')

//     console.log('origin: ' + getOn);
//     console.log('destination: ' + getOff);
//     console.log(mappedRoute);
//     console.log(numberOfStops + " stops total")
// } 