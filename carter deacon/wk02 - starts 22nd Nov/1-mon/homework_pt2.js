console.log("Homework Part 2")

const fruitArr = ['apple', 'banana', 'grapes', 'orange', 'peach', 'pineapple'];
let randomFruit = Math.floor(Math.random() * fruitArr.length);
let computerChoice = fruitArr[randomFruit];

let userInput = prompt("Guess my favourite fruit").toLowerCase;
let i = 1;

// allowing user 10 guesses as it doesn't need to link to array length in this case given there are other fruits out there.
while (userInput !== computerChoice) {
    if (userInput !== computerChoice) {
        userInput = prompt(`Wrong. Try again.
        Hint: It's ${computerChoice.length} letters long. Starts with a ${computerChoice[0]} and ends with a ${computerChoice[computerChoice.length - 1]}`)
    } else {
        alert(`Congrats! You got it in ${i} attempts.`)
        break;
    } 
    i++;
}