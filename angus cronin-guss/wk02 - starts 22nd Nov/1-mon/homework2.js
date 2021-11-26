// Guess the fruit game
var fruits = ["apple", "pineapple", "banana", "blueberry"];


var input = prompt("Guess what fruit I am thinking of from this list. Apple, Pineapple, Banana or Blueberry");
var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
var attempts = 0;



while (input !== randomFruit) {
    var hint = " hint: It's "+ randomFruit.length + " letters long. " + "Starts with "+ randomFruit.charAt(0) + " and ends with "+ randomFruit.substr(-1);
    input = prompt("Wrong. Try again" + hint);
    attempts = attempts + 1;
}
console.log("Congrats! You got it in " + attempts+ " attempt." );

// computer tells user to guess a fruit between var fruits
// if user is wrong, display a hint to the user
// user will have 5 guesses otherwise they fail

