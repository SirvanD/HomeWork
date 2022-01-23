var favFruit = ["banana", "kiwi", "strawberry", "watermelon", "mango"];

var fruitRandomLength = Math.floor(Math.random() * favFruit.length);
var chosenFruit = favFruit[fruitRandomLength]

var firstFruit = favFruit[0]
var secondFruit = favFruit[1]
var thirdFruit = favFruit[2]
var fourthFruit = favFruit[3]
var fifthFruit = favFruit[4]

fruits = favFruit[fruitRandomLength]


console.log("its " + (fruits.length) + " characters long. Starts with " + fruits[0] + " and ends with " + fruits.charAt(fruits.length - 1) + ". guess the fruit.")

var counter = 1

function guessTheFruit(guess){
    if (guess != chosenFruit){
        counter++ ;
        return("try again");
    }
    else {
        return("nice! that took " + counter + " attempts!")
    }
}