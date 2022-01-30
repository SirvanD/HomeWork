var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
]
// write code to log maple syrup in the console using the the pantry array above
console.log(pantry[1][2][1])

// loops (5pt)

// 1. using a while loopprint the following in the console:
// 17
// 15
// 13
// 11
// 9
// 7
// 5
// 3
// 1


let num = 17;
while (num > 0) {
    if (num % 2 == 1) {
        console.log(num);
    }
    num--;
}

// loop through the days array using a while loop to print the following in the console
// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
var index = 0
while (index < days.length) {
    console.log(index + " " + days[index]);
    index++
}

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
}

//   1. write code to console log the last movie using the brain object above (assume Jaws is the first movie)
console.log(brain.favMovies[brain.favMovies.length - 1]);

//   2. wirte code to change energyLevel to 99

brain.energyLevel = 99;

// builtin functions (4pt)
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// write code to randomly select a movie from the favMovies array and store it in a variable

let random = Math.floor(Math.random() * favMovies.length);
let mov = favMovies[random];
// write code to print the movie in uppercase in the console if the randomly selected movie is Jaws


if (mov == "Jaws") {
    console.log(mov.toUpperCase())
}

// data types and return values (3pt)
// prompt('enter a number');
// whats the data type of the return value of the above function call
The data type is string
// write code to add 5 to the number user entered and log it on the console

console.log(5 + Number(prompt('enter a number')))

