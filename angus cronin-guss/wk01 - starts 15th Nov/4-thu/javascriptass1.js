// Question 1 

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
];
console.log(pantry[1][2][1]);

// Question 2 Loops 1

var loop1 = (19);
while (loop1 > 1) {
    loop1 = loop1 - 2;
    console.log(loop1);   
}

// Questions 2 Loops 2
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
var count = (-1);
    while (count < 3) {
        count = count + 1;
    console.log(count + " " + days[count])
    };

//  Question 3 Objects 1

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  };

console.log(brain.favMovies.slice(-1)[0]);

//Question 3 Objects 2
brain.energyLevel = 99;
console.log(brain);

// Questions 4 Functions 1
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

var randomMovie = favMovies[Math.floor(Math.random() * favMovies.length)];
console.log(randomMovie);

// Question 4 Functions 2
function upperCase (favMovies, randomMovie) {
    if (randomMovie === brain.favMovies[0]) {
        console.log(randomMovie.toUpperCase());
    }
}
upperCase();

// Question 5 data types  1
// data type is a string

// Question 5 data types 2

var prompt = Number(prompt('enter a number'));

var input = Number(prompt) + 5;
console.log(input);
