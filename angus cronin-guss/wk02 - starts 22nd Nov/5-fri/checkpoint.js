
// var speak = prompt("Say something to Grandma");

// while (speak != 'BYE' && 'BYE' && 'BYE') {
//     if (speak === speak.toUpperCase()) {
//            speak = prompt("NO, NOT SINCE 1938!");
//         } else {
//             speak = prompt("HUH?! SPEAK UP, SONNY");
            
//     }
// }

// alert("You have left Grandma");

var speak = prompt("Say something to Grandma");
var randomYear = Math.ceil(Math.random() * (1950 - 1930 + 1) + 1930);

function firstLoop() {
    while (speak !== 'BYE') {
        if (speak === speak.toUpperCase()) {
            speak = prompt(`No, not since ${randomYear}!`);
        } else if (speak == "BYE") {
            prompt(secondLoop());
        } else {
            speak = prompt("HUH?! SPEAK UP, SONNY");
        }
    }
} 
firstLoop();

function secondLoop() {
    while (speak == "BYE") {
       speak1 = prompt("Pardon?");
    } if (speak1 == "BYE") {
        speak2 = prompt('PARDON?');
    } else if (speak2 == "BYE") {
        alert('You have left grandma')
    } else {
        firstLoop();
    }
}
