// 1. Drinking age?
// Create a program named drinkingAge.js allow the user to provide an age through the command line when they run the program.

// Remember that anytime you get input, it is a string, so you will need to change the age input to a number.

// If age is less than 18, print an appropriate message.

// If the age is equal to or over 18, print a different message.

let age = Number(process.argv[2]);
if (age < 18) {
    console.log("Wait until you are 18 to drink");
} else {
    console.log("Yes, you can drink now.");
}