// Your top choices
// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

// let i = 0;
// let colors = ['blue', 'red', 'pink', 'white', 'black'];
// while (i < colors.length) {
//     console.log(`My #${i + 1} choice is ${colors[i]}.`);
//     i++;
// }

// bonus
let i = 0;
let colors = ['blue', 'red', 'pink', 'white', 'black'];
let sequence = ['1st', '2nd', '3rd', '4th', '5th'];
while (i < colors.length) {
    console.log(`My ${sequence[i]} choice is ${colors[i]}.`);
    i++;
}