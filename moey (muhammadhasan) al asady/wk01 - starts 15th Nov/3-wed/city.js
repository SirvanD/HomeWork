// Create a program name city.js. allow the user to provide a city

// Depending on the answer, print an appropriate response of your choosing

var visitCity = process.argv[2];

function whichCity (visitCity) {
    if (visitCity === 'sydney') {
        console.log('You should visit the Toronga zoo')
    } else if (visitCity === 'melbourne') {
        console.log('fly to Sydney')
    } else {
        console.log('Try entering Melboure')
    }

}

whichCity(visitCity);
