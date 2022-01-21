// 1. Drinking age?
// Create a program named drinkingAge.js allow the user to provide an age through the command line when they run the program.
// Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
// If age is less than 18, print an appropriate message.
// If the age is equal to or over 18, print a different message.

let age = Number(process.argv[2]);

if(isNaN(age)){
    //if theres no number
    console.log('Sorry - please enter a number!');
} else if(age >=18) {
    console.log(`Go grab a coldie - you're over 18!`);
} else {
    console.log(`Looks like a cool glass of water for you - ${age} under 18!`);
}