//javascript assessment

// data structure arrays
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]
console.log(pantry[1][2][1])

//loops 1
var counter = 17
while (counter > 0) {
    if (counter % 2 == 1) {
        console.log(counter);
    }
    counter--;
}

//loops 2

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
var counter = 0
while (counter < days.length) {
    console.log(counter + " " + days[counter]);
    counter++;
}

//objects & arrays 
var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

console.log(brain.favMovies[brain.favMovies.length - 1]);

brain.energyLevel = 99;

//builtin functions

var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

var randomMovie = favMovies[Math.floor(Math.random() * favMovies.length)]

if (randomMovie == "Jaws"){
    console.log(randomMovie.toUpperCase())
}

// data types and return values

//prompt('enter a number');
//user input will give you a string

var userNumber = Number(prompt('enter a number'));
console.log(userNumber + 5)

 