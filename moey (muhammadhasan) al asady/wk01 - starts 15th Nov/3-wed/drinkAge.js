
// Create a program named drinkingAge.js allow the user to provide an age through the command line when they run the program.

// Remember that anytime you get input, it is a string, so you will need to change the age input to a number.

// If age is less than 18, print an appropriate message.

// If the age is equal to or over 18, print a different message.









var currentAge = Number(process.argv[2]);

function drinkCheck (currentAge) {
    if  (currentAge >= 18 ) {
   console.log ('Beers on the house')
} else {
    console.log('Get out of my bar')
}
}

drinkCheck(currentAge)