let fruits = ["banana", "pineapple", "apple", "passionfruit", "guava", "raspberry", "blueberry", "lemon", "blackberry"];

let randomIndex = Math.floor(Math.random() * fruits.length);
let secretWord = fruits[randomIndex];

let userGuess = prompt(`Guess the fruit! Hint: it's ${secretWord.length} characters long. It starts with "${secretWord[0]}" and ends with "${secretWord[secretWord.length-1]}".`);

counter = 1;
while (userGuess !== secretWord) {
    userGuess = prompt("Wrong, guess again.");
    counter ++;
}

if (counter === 1) {
    alert(`Congrats! You got it in ${counter} attempt.`);
} else {
    alert(`Congrats! You got it in ${counter} attempts.`);
}
