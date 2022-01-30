// Javascript Assessment

/** Data Structures - Arrays (1 pt) */

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

console.log(pantry[1][2][1]);


/**loops (5pt) */

// 1. number while loop
var num = 18;

while (num > 0) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num--;
}

// days while loop
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
var num = 0;

while (num < days.length) {
    console.log(num + ' ' + days[num]);
    num++;
}


/** Objects & arrays (2pt) */
var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

// 1. log last movie from object -brain 
  console.log(brain.favMovies[brain.favMovies.length - 1]);

// 2. change energyLevel to 99
  brain.energyLevel = 99;
  console.log(brain.energyLevel);

/** builtin functions (4pt) */
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// 1. write code to randomly select a movie from the favMovies array and store it in a variable
//2. write code to print the movie in uppercase in the console if the randomly selected movie is Jaws

var randomIdx = Math.floor(Math.random() * favMovies.length);
var randomMovie =  favMovies[randomIdx];

if (randomMovie == 'Jaws') {
    console.log(randomMovie.toUpperCase());
} else {
    console.log(randomMovie)
}

/** data types and return values (3pt) */

var input = prompt('enter a number'); // a string data type

//console.log(typeof input);

console.log(Number(input) + 5);


  