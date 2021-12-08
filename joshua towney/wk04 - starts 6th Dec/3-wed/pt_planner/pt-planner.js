var route1 = ['Flinders Street','Richmond','East Richmond','Burnley','Kooyong','Glenferrie']
var route2 = ['Flinders Street','Richmond','Kooyong','Tooronga']
var route3 = ['Flinders Street','Richmond','South Yarra','Prahran','Windsor']
var route4 = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga']
var route5 = ['Flagstaff','Melbourne Central','Parliament','Richmond','burnley','kooyong','glenferrie']
var route6 = ['Flagstaff','Melbourne Central','Parliament','Richmond','South Yarra','Prahran','Windsor']
var route7 = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
var route8 = ['Southern Cross','Richmond','burnley','kooyong','glenferrie']
var route9 = ['Southern Cross','Richmond','Kooyong','Tooronga']

// function trip (getOn, getOff) {
    console.log('origin: ' + 'Flinders Street');
    console.log('destination: ' + 'Glenferrie')
    var route = [];

    for (i = 0; i < route1.length; i++ ) {
        route.push(route1[i]);
        route.push("---->");
    }
    route.pop();

    var numberOfStops = Maths.floor(route.length/2);
    
    console.log(route.join(' '))
    console.log(numberOfStops + " stops total")
// } 