// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var topChoices = ['Green', 'Blue', 'Yellow', 'Red', 'Aqua'];
var suffix = ['st', 'nd', 'rd', 'th', 'th'];
var iteration = 0;

while (iteration <=4) {
    console.log(`My ${iteration +1}${suffix[iteration]} choice is ${topChoices[iteration]}`);
    iteration++;
}