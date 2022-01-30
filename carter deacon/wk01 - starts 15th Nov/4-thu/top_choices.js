var topChoices = [];
var placeArray = ['1st', '2nd', '3rd', '4th', '5th']
var inputs = 1;

while (inputs < 6) {
    let userInput = prompt("Please enter your favourite color");
    topChoices.push(userInput);
    console.log(`My ${placeArray[inputs-1]} choice is ${userInput}.`);
    inputs++
}

console.log(topChoices);
