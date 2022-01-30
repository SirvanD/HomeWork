// Checkpoint 1b

// 1. Vowel count
function vowelCount(word) {
    let vowelCounter = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            vowelCounter++;
        }
    }
    return vowelCounter;
}

// 2. Grandma returns
let userSays = prompt("What would you like to say to Grandma?");
let userSaysArray = [];
let yelledBye3Times = false;

while (yelledBye3Times !== true ) {
    if (userSays === userSays.toUpperCase()) {
        userSaysArray.push(userSays);

        if (userSaysArray[userSaysArray.length - 1] === "BYE" && userSaysArray[userSaysArray.length - 2] === "BYE" && userSaysArray[userSaysArray.length - 3] === "BYE") {
            yelledBye3Times = true;
            alert("GOODBYE, SWEET FACE!");
        } else {
            let randomYear = Math.floor(Math.random() * (21) + 1930);
            alert(`NO, NOT SINCE ${randomYear}!`);
            userSays = prompt("What else would you like to say to Grandma?");
        }
    } else {
        alert("HUH?! SPEAK UP, SONNY!");
        userSays = prompt("What else would you like to say to Grandma?");
    }
} 

// 3. Lord Buckethead
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


// How would you access theresa's party (i.e. the string "Conservative")?
users.theresa.party;

// How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
users.Lord_Buckethead.party;

// How would you change mr fishfinger's party to "birds eye"?
users.mr_fishfinger.party = "birds eye";