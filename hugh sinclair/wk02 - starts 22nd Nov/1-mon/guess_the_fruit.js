// # Guess the fruit

// You are to create a basic guess the word game. 

// ## step 1

// Prepare a list of your favourite fruits and store it in an appropriate data structure and have the computer select a random fruit as the secret word.

// ## step 2
// Based on the selected fruit give the user a hint like the example below. you can use `prompt`, `alert` or `console.log` to show the hint

// for example if the secret fruit is `"banana"`
// ```
// hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.
// ```
// instead of typing out the hint manually for every fruit. try to use a template string and programmatically work out the starting letter, ending letter and how many characters long.

// ## step 3
// Allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.
// ```
// wrong. try again.
// ```

// ## step 4
// Congratulate the user and display number of attempts they made.

// ```
// Congrats! you got it in 5 attempts.

var fruits = ['banana', 'apple', 'kiwi', 'pineapple', 'peach', 'grape', 'mango'];

var aiFruitChoice = fruits[Math.floor(Math.random() * fruits.length)];
console.log(aiFruitChoice)


var numberOfGuesses = 1;

guess = prompt(`Guess what fruit I'm thinking of! It's ${aiFruitChoice.length} characters long, starts with ${aiFruitChoice[0]} and ending with ${aiFruitChoice[aiFruitChoice.length -1]}`);
while (guess !== aiFruitChoice){
    guess = prompt(`nope, try again! it's ${aiFruitChoice.length} characters long, starts with ${aiFruitChoice[0]} and ending with ${aiFruitChoice[aiFruitChoice.length -1]}`);
    numberOfGuesses++
}
console.log(`Congrats! you got it in ${numberOfGuesses} guesses!`);
