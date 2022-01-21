let favFruits = ['mango', 'apple', 'banana', 'grape'];
let randNum = Math.floor(Math.random() * favFruits.length);
secretWord = favFruits[randNum];
console.log(secretWord);
let message = `hint: it's a ${secretWord.length} character fruit name, starts with '${secretWord[0]}' and ends with '${secretWord.slice(-1)}', Guess the fruit ! `;

let userInput = prompt (message);
let counter = 1;
while (userInput !== secretWord){
    userInput = prompt (`Wrong attempt! Try again  ${message}`);
    counter ++;
} alert (`Congrats! you got it in ${counter} attempts`);
