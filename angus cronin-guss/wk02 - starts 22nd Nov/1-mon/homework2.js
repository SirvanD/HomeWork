// Guess the fruit game
var fruits = ["apple", "pineapple", "banana", "blueberry"];
var hints = ["it's also a company", "spongebob lives in one", "it's long and yellow", "it's from the berry family"];

var input = prompt("Guess what fruit I am thinking of from this list. Apple, Pineapple, Banana or Blueberry");
var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
var attemps = 0;


// function guessGame (fruits) {

//    while (guesses < fruits.lenth) {
//        if (input == randomFruit) {
//            alert("Congrats! you got it in 5 attempts.");
//        } else if (randomFruit === "pineapple") {
//            alert("Wrong, try again.)
//            guesses = guesses + 1;
//            return "Wrong, try again" + input;
           
//        }
//    }
// } 
// guessGame();

// while (input !== randomFruit) {   
//         var input = prompt("it's also a company");
//         guesses = guesses + 1;
//         if (guesses > maxGuesses) {
//             console.log("You are out of guesses");
        
//         } else 
// }
// computer tells user to guess a fruit between var fruits
// if user is wrong, display a hint to the user
// user will have 5 guesses otherwise they fail

