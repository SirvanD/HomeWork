// Guess the fruit
// You are to create a basic guess the word game.

// step 1
// Prepare a list of your favourite fruits and store it in an appropriate data structure and have the computer select a random fruit as the secret word.

// step 2
// Base on the selected fruit give the use a hint like the example below. you can use prompt, alert or console.log to show the hint

// for example if the secret fruit is "banana"


// var fruits = ['raspberry', 'strawberry', 'banana', 'apple', 'cherry']; // array
// let selected = Math.floor(Math.random() * fruits.length); // picks a random number in the array
// let computerRandom = fruits[selected]; // assigns the number back to the name of the fruit in the array
// console.log(selected);

// hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.
// instead of typing out the hint manually for every fruit. try to use a template string and programmatically work out the starting letter, ending letter and how many characters long.

var person = prompt("Guess the fruit");

// step 3
// Allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.


var index = 1; 

while (index < 6) {
  if (person !== computerRandom) {
      person = prompt("wrongo, try again. hint: the fruit has " + computerRandom.length + " letters and starts with a " + computerRandom[0] + " and ends with " + computerRandom[computerRandom.length-1]);
    } else {
    alert('Coolies, you guessed it in ' + index + ' go(es)');
    break;
  }
    index = index + 1; 
}

// step 4
// Congratulate the user and display number of attempts they made.


console.log('you guessed correct. It took you' + index + 'attempts to guess correctly') 