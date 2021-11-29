// Grandma
// Write a lovely Grandma program using prompts, alerts and a loop.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// You can't stop talking to grandma until you shout BYE.

function grandma(message) {
    var message = prompt("WHATS UP KIDDO?");
    while (message != "BYE") {
        if (message != message.toUpperCase() || !isNaN(message)) {
            alert('HUH?! SPEAK UP, SONNY!');
        } else {
            alert('NO, NOT SINCE 1938!');
        }
        message = prompt();
    }
}