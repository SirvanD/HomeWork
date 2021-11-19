// Data Structures - Arrays (1 pt)
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

console.log(pantry[1][2][1]);

// loops (5pt)
// Question 1
let counter = 18;

while (counter > 0) {
    if (counter % 2 === 1) {
        console.log(counter);
    }
    counter--;
}


// Question 2
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

let counter = 0;
while (counter < days.length) {
    console.log(`${counter} ${days[counter]}`);
    counter++;
}

// Objects & arrays (2pt)
var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

// Question 1
let lastMovie = brain.favMovies[brain.favMovies.length - 1];
console.log(lastMovie);

// Question 2
brain.energyLevel = 99;

// builtin functions (4pt)
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Question 1
let randomMovieIndex = Math.floor(Math.random() * favMovies.length);
let randomMovie = favMovies[randomMovieIndex];

// Question 2
if (randomMovie === 'Jaws') {
    console.log(randomMovie.toUpperCase());
}

// data types and return values (3pt)
let userNumber = Number(prompt('enter a number'));

// Question 1
The data type of the return value is a string.

// Question 2
// I assigned the prompt function to a variable above so I could access the user input
console.log(userNumber + 5);