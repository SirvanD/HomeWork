//  1. Vowel count 
var vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCount(word) {
    let count = 0;
    let smallWord = `${word}`.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(smallWord[i])) {
            count++;
        }
    }
    return count;
}


// 2. Grandma returns
let userInput = prompt("HELLO DEAR!");

function lovelyGrandma(userInput) {
    let byeCount = 0;
    while (byeCount < 3) {
        let desiredInput = userInput.toUpperCase();
        // Giving it random year between 1912 and 2021 to make it more realistic
        let randomYear = Math.floor(Math.random() * (2021 - 1912 + 1) + 1912);
        if (byeCount == 2 && userInput !== "BYE" && userInput !== desiredInput) {
            userInput = prompt("HUH?! SPEAK UP, SONNY!");
            byeCount = 0;
        } else if (byeCount == 2 && userInput !== "BYE") {
            userInput = prompt(`NO, NOT SINCE ${randomYear}!`);
            byeCount = 0;
        } else if (byeCount == 2 && userInput == "BYE") {
            alert("BYE DEAR!");
            return;
        } else if (userInput == "BYE") {
            userInput = prompt(`NO, NOT SINCE ${randomYear}!`);
            byeCount++;
            console.log(byeCount)
        } else if (userInput == desiredInput && userInput !== "BYE") {
            userInput = prompt(`NO, NOT SINCE ${randomYear}!`);
            byeCount = 0;
        } else {
            userInput = prompt("HUH?! SPEAK UP, SONNY!");
            byeCount = 0;
        } 
    }
}

lovelyGrandma(userInput);

// 3. Lord buckethead
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

// 1. How would you access theresa's party (i.e. the string "Conservative")?
users.theresa.party;

// 2. How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
users.Lord_Buckethead.party;

// 3. How would you change mr fishfinger's party to "birds eye"?
users.mr_fishfinger.party = "birds eye";