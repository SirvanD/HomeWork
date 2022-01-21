

var fruits = ['apple','orange','banana','kiwi','mango','watermelon','strawberry','pear'];
var computerPick = fruits[Math.floor(Math.random() * fruits.length)];
var attempts = 0;

console.log("It starts with " + computerPick.split('')[0] + "! It ends with " + computerPick.split('')[computerPick.length -1] + "! And it is " + computerPick.length + " letters long");

function playerGuess(str) {
    attempts = attempts + 1;
    if (str != computerPick) {
        console.log('Wrong answer! Guess again, cowboy!');
    } else {
        console.log('Congratulations! You got it in ' + attempts + ' guesses!')
    } 
}