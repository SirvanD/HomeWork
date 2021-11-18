var topChoices = [];
var inputs = 1;

while (inputs < 6) {
    let userInput = prompt("Please enter your favourite color");
    topChoices.push(userInput);
    console.log(`My #${inputs} choice is ${userInput}.`);
    inputs++
}

console.log(topChoices);

// No idea how to do the bonus part other than manually writing each response