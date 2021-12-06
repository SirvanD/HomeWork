// Question 1 (Vowel Count)

var vowels = ["a", "e", "i", "o", "u"]

function vowelCount(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    } return count;
}

//Question 2 (Grandma)
// var speak = prompt("Say something to Grandma");
// var randomYear = Math.ceil(Math.random() * (1950 - 1930 + 1) + 1930);

// function firstLoop() {
//     while (speak !== 'BYE') {
//         if (speak === speak.toUpperCase()) {
//             speak = prompt(`No, not since ${randomYear}!`);
//         } else if (speak == "BYE") {
//             prompt(secondLoop());
//         } else {
//             speak = prompt("HUH?! SPEAK UP, SONNY");
//         }
//     }
// } 
// firstLoop();

// function secondLoop() {
//     while (speak == "BYE") {
//        speak1 = prompt("Pardon?");
//     } if (speak1 == "BYE") {
//         speak2 = prompt('PARDON?');
//     } else if (speak2 == "BYE") {
//         alert('You have left grandma')
//     } else {
//         firstLoop();
//     }
// }
// Question 3 
var users = {
    theresa: {
      party: "Conserative",
      favoriteNumbers: [12, 42, 75]
    },
    Lord_Buckethead: {
      party: "Gremloids",
      favoriteNumbers: [8, 12, 24, 9]
    },
    mr_fishfinger: {
      party: "Independent",
      favoriteNumbers: [12, 14, 85, 99, 1001]
    }
  }
  //accessing conserative
  users.theresa['party'];
  // accessing Gremloids
  users.Lord_Buckethead['party'];
  // changing Mr FishFinger party name
  users.mr_fishfinger['party'] = 'birds eye';