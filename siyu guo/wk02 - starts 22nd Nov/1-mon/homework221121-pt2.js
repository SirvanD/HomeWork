// // Guess the fruit
// You are to create a basic guess the word game.

// step 1
// Prepare a list of your favourite fruits and store it in an appropriate data structure and have the computer select a random fruit as the secret word.
var fruits = ['apple', 'banana', 'orange', 'papaya', 'mandarin', 'pear', 'watermelon', 'cherry', 'strawberry'];
var randomIndex = Math.floor(Math.random() * fruits.length);
var computer = fruits[randomIndex];
// step 2
// Base on the selected fruit give the user a hint like the example below. you can use prompt, alert or console.log to show the hint

// for example if the secret fruit is "banana"

// hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.
// instead of typing out the hint manually for every fruit. try to use a template string and programmatically work out the starting letter, ending letter and how many characters long.

alert(`hint: it's ${computer.length} characters long. Starts with ${computer.slice(0, 1)} and ends with ${computer.slice(-1)}. guess the fruit.`)

// step 3
// Allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.

// wrong. try again.

// step 4
// Congratulate the user and display number of attempts they made.

// Congrats! you got it in 5 attempts.
var user = prompt();
var guessNum = 1;
while (user != computer) {
    guessNum++;
    user = prompt();
}
alert(`Congrats! You got it in ${guessNum} attempt(s).`)