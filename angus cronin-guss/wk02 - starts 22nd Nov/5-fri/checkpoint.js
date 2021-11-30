
var speak = prompt("Say something to Grandma");

while (speak != 'BYE') {
    if (speak === speak.toUpperCase()) {
           speak = prompt("NO, NOT SINCE 1938!");
        } else {
            speak = prompt("HUH?! SPEAK UP, SONNY");
            
    }
}

alert("You have left Grandma");