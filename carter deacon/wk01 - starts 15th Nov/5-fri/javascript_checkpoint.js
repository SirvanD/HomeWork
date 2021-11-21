// Arrays
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]  

  console.log(pantry[1][2][1]);

// Loops 1
var counter = 18;

while (counter > 0) {
    if (counter % 2 == 1) {
        console.log(counter);
    }
    counter--;
}

// Loops 2
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayCounter = 0;

while (dayCounter < 4) {
    console.log(`${dayCounter} ${days[dayCounter]}`);
    dayCounter++;
}

//Objects & Arrays
var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  } 

console.log(brain.favMovies[brain.favMovies.length - 1]);
brain.energyLevel = 99;

//Built-in functions
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

let randomNum = Math.floor(Math.random() * favMovies.length);
let randomMovie = favMovies[randomNum];

if (randomMovie == favMovies[0]) {
    console.log(randomMovie.toUpperCase());
} else {
    console.log(randomMovie);
}

//Data types & return values
var userInput = Number(prompt('enter a number'));
// typeof(userInput) confirms initial user input is is string and not number.
console.log(`${userInput} + 5 = ${userInput + 5}`)