
/** Guess the fruit */

// step 1 - create a list and have the computer select a random fruit as secret word

var favFruits = ['mango', 'cherry', 'strawberry', 'papaya', 'watermelon'];

function randomIdx() {
    return Math.floor(Math.random() * favFruits.length);
}

var secretWord = favFruits[randomIdx()];

//console.log(secretWord);


// step 2 - provide a hint to the user based on the selected fruit

var wordLen = secretWord.length;
var firstLetter = secretWord.charAt(0);
var lastLetter = secretWord.charAt(wordLen-1);

var userInput = prompt(`hint: it's ${wordLen} characters long. Starts with ${firstLetter} and ends with ${lastLetter}. guess the fruit.`);

// step 3 - allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.

var numOfAttempt = 1;

while (userInput != secretWord) {
    
    userInput = prompt('wrong. try again!');
    numOfAttempt+=1;
}

// step 4 - display congratulatory message and num of attempts

console.log(`Congrats! you got it in ${numOfAttempt} attempt/s.`)