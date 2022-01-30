// Write a lovely Grandma program using prompts, alerts and a loop.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// You can't stop talking to grandma until you shout BYE.

let getRandomValue = prompt("text");

while (getRandomValue !== "BYE") {
  if (getRandomValue == getRandomValue.toUpperCase()) {
    alert("NO,NOT SINCE 1938");
    getRandomValue = prompt("text");
  } else {
    alert("HUH! SPEAK UP, SONNY");
    getRandomValue = prompt("text");
  }
}
alert("BYE SONNY");
