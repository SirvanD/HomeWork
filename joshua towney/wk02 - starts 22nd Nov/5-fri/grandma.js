// Write a lovely Grandma program using prompts, alerts and a loop.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// You can't stop talking to grandma until you shout BYE.

// var hiGrandma = prompt('Say something to Granny');

// while (hiGrandma != 'BYE') {
//     prompt('say something to granny');



//     if (hiGrandma === hiGrandma.toUpperCase()) {
//         console.log("NO, NOT SINCE 1938!")
//     } else {
//         console.log("HUH?! SPEAK UP SONNY")
//     } 
// }
// alert("BYE BYE, SONNY")

var hiGrandma = prompt("HI SONNY");

while (hiGrandma != 'BYE') {
    if (hiGrandma === hiGrandma.toUpperCase()) {
            alert("NO, NOT SINCE 1938!");
        } else {
            hiGrandma = alert("HUH?! SPEAK UP SONNY");
    }
    hiGrandma = prompt('Anything else, dearie?');
}

alert("BYE BYE, SONNY");

//notes: var hiGrandma = prompt("HI SONNY") needs to be present BEFORE the while loop or it will not be read by the while part of the loop. Second var = needed inside the loop to update the receiver outside.

// var areEqual = string1.toUpperCase() === string2.toUpperCase();

