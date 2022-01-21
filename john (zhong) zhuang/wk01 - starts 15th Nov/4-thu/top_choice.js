// Your top choices
// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

// let userChoice = ['firefigther', 'writer', 'coder', 'pilot', 'police'];
// let num = 0
// while (num < 5) {
//     console.log("My #" + (num + 1) + " choice is " + userChoice[num] + ".");
//     num++;
// }

let userChoice = ['firefigther', 'writer', 'coder', 'pilot', 'police'];
let num = 0;
let rank = String(num + 1);


while (num < 5) {
    if (num + 1 === 1) {
        rank = String(num + 1 + 'st')
    } else if (num + 1 === 2) {
        rank = String(num + 1 + 'nd')
    } else if (num + 1 === 3) {
        rank = String(num + 1 + 'rd')
    } else {
        rank = String(num + 1 + 'th')
    }
    console.log("My " + rank + " choice is " + userChoice[num] + ".");
    num++;
}
