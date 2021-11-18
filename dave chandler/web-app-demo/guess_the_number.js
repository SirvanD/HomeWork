//random number between 0 and 10 inclusive evaluated against user input in window.prompt()
let randomNumber = String(Math.floor(Math.random()*11));
console.log(`hot tip! - ${randomNumber}`);

let input = prompt(`Enter your number guess between 0 and 10)`, "type your guess here");

while(input != randomNumber){
    input = prompt(`Nope that's not it, try another number between 0 and 10)`, "try again!");
}

alert(`Booyah! U guessed the secret number which was ${randomNumber}`);