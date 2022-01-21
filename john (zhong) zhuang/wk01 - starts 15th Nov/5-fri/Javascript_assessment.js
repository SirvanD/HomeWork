// Data Structures - Arrays (1 pt)
// var pantry = [
//   ['nutella', 'honey'],
//   ['pasta', 'rice', ['flour', 'maple syrup']]
// ]
// write code to log maple syrup in the console using the the pantry array above

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
]
console.log(pantry[1][2][1]);

// loops (5pt)
// 1. using a while loop print the following in the console:
// 17
// 15
// 13
// 11
// 9
// 7
// 5
// 3
// 1
let i = 17;
while (i > 0) {
    if (i % 2 == 1) {
        console.log(i)
    } i--;
}


// 2. loop through the days array using a while loop to print the following in the console
// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
var count = 0
while (count < days.length) {
    console.log(count + " " + days[count]);
    count++;
}

// Objects & arrays (2pt)
// assume the following object:

// var brain = {
//   energyLevel: 10,
//   favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
// }
// write code to console log the last movie using the brain object above (assume Jaws is the first movie)
// wirte code to change energyLevel to 99

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
}
console.log(brain.favMovies[brain.favMovies.length - 1]);
brain.energyLevel = 99;
console.log(brain.energyLevel);

// builtin functions (4pt)
// var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// write code to randomly select a movie from the favMovies array and store it in a variable
// write code to print the movie in uppercase in the console if the randomly selected movie is Jaws

var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
var randomMovie = favMovies[Math.floor(Math.random() * favMovies.length)];
if (randomMovie === favMovies[0]) {
    console.log(randomMovie.toUpperCase());
} else console.log(randomMovie);


// data types and return values (3pt)
// prompt('enter a number');
// whats the data type of the return value of the above function call
String
// write code to add 5 to the number user entered and log it on the console
let input = Number(prompt('enter a number'));
console.log(input + 5);
