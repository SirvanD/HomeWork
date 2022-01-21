// checkpoint 1b
// 1. Vowel Count
// write a vowelCount function that returns the number of occurrences of vowels in a word. Vowels are a, e, i, o, u

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

// vowelCount('Spaghettification') // => 7
// vowelCount('HELLO') // => 2
// vowelCount('cake pudding') // => 4

function vowelCount(word) {
    let tempArr = word.toLowerCase().split('');
    let counter = 0;
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] == 'a' || tempArr[i] == 'e' || tempArr[i] == 'i' || tempArr[i] == 'o' || tempArr[i] == 'u') {
            counter++;
        }
    }
    return counter;
}


// 2. Grandma returns
// last time you spoke to lovely grandma https://gist.github.com/epoch/2e45ffe2dbf50cf1cea2466265f22291

// you can start from scratch or continue where you left off.

// no dom UI necessary for this exercise. follow the instructions and use prompts, alerts and loops

// Whatever you say to grandma (whatever you type in), she should respond with HUH?! SPEAK UP, SONNY!. To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.
// You can't stop talking to grandma until you shout BYE.

// What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.


function grandma(message) {
    var message = prompt("WHATS UP KIDDO?");
    var year;
    var counter = 0;
    while (counter != 3) {
        if (message != "BYE") {
            if (message != message.toUpperCase() || !isNaN(message)) {
                counter = 0;
                alert('HUH?! SPEAK UP, SONNY!');
            } else {
                counter = 0;
                year = Math.round(Math.random() * 20) + 1930;
                alert(`NO, NOT SINCE ${year}!`);
            }
            message = prompt();
        } else {
            counter++;
            if (counter == "3") {
                break;
            }
            year = Math.round(Math.random() * 20) + 1930;
            alert(`NO, NOT SINCE ${year}!`)
            message = prompt();
        }
    }
    alert('BYE BYE, SONNY.');
}
grandma()

// 3. Lord buckethead
// var users = {
//   theresa: {
//     party: "Conserative",
//     favoriteNumbers: [12, 42, 75]
//   },
//   Lord_Buckethead: {
//     party: "Gremloids",
//     favoriteNumbers: [8, 12, 24, 9]
//   },
//   mr_fishfinger: {
//     party: "Independent",
//     favoriteNumbers: [12, 14, 85, 99, 1001]
//   }
// }
// How would you access theresa's party (i.e. the string "Conservative")?
users.theresa.party;
// How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
users.Lord_Buckethead.party;
// How would you change mr fishfinger's party to "birds eye"?
users.mr_fishfinger.party = "birds eye";