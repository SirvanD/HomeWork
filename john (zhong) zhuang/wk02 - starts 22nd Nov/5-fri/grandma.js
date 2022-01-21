// Grandma
// Write a lovely Grandma program using prompts, alerts and a loop.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// You can't stop talking to grandma until you shout BYE.

// prompt(`Grandma is smiling at you. Do you want to say something to her?`);

alert(`Grandma is smiling at you. Do you want to say something to her?`);
while (usr = prompt(`You say: `)) {
    if (usr == 'BYE') {
        alert(`She looks confused for two seconds, then shakes her head, and let you go.`)
        break;
    }
    else if (usr === usr.toUpperCase()) {
        alert(`NO, NOT SINCE 1938!`)
    } else {
        alert(`HUH? SPEAK UP SONNY!`);
    }
}