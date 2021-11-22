var favFruit = ["banana", "kiwi", "strawberry", "watermelon", "mango"];

var fruitRandomLength = Math.floor(Math.random() * favFruit.length);
var chosenFruit = favFruit[fruitRandomLength]

var firstFruit = favFruit[0]
var secondFruit = favFruit[1]
var thirdFruit = favFruit[2]
var fourthFruit = favFruit[3]
var fifthFruit = favFruit[4]

if(chosenFruit == "banana"){
    console.log("its " + (favFruit[0].length) + " characters long. Starts with " + favFruit[0][0] + " and ends with " + firstFruit.charAt(firstFruit.length - 1) + ". guess the fruit.")
} else if (chosenFruit == "kiwi"){
    console.log("its " + (favFruit[1].length) + " characters long. Starts with " + favFruit[1][0] + " and ends with " + secondFruit.charAt(secondFruit.length - 1) + ". guess the fruit.")
} else if(chosenFruit == "strawberry"){
    console.log("its " + (favFruit[2].length) + " characters long. Starts with " + favFruit[2][0] + " and ends with " + thirdFruit.charAt(thirdFruit.length - 1) + ". guess the fruit.")
} else if(chosenFruit == "watermelon"){
    console.log("its " + (favFruit[3].length) + " characters long. Starts with " + favFruit[3][0] + " and ends with " + fourthFruit.charAt(fourthFruit.length - 1) + ". guess the fruit.")
} else if(chosenFruit == "mango"){
    console.log("its " + (favFruit[4].length) + " characters long. Starts with " + favFruit[4][0] + " and ends with " + fifthFruit.charAt(fifthFruit.length - 1) + ". guess the fruit.")
}

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