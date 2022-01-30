var fruits = [`mango `, `pear`, `orange`, `banana`, `squidward`];
const elementNumber = Math.floor( Math.random() * fruits.length );
var counter = 1;
const answer = fruits[elementNumber]
var promptGuess = prompt(`The fruit starts with a ${answer.charAt(0)} and ends with ${answer.charAt(answer.length -1)}`);



while (promptGuess != answer) {
  promptGuess = prompt(`guess again`)

    // store your variable in a new prompt variable = prompt(`wrong, guess again`) 
  counter++
  
}
console.log(`yay! you got it after ${counter} attempts`)




// console.log(fruits[elementNumber])

// function guessTheFruit() {
// console.log(fruits[elementNumber])
// if (hint === //input)
// //return `yay! you guessed it`
// //} else
// return `wrong. try again.`


// //guessTheFruit ()