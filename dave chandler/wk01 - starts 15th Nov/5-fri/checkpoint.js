// Data Structures - Arrays (1 pt)
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

  //write code to log maple syrup in the console using the the pantry array above
  console.log(pantry[1][2][1]);

// loops (5pt)
// using a while loop print the following in the console:
let i = 17
while (i > 0){
    console.log(i);
    i-=2
}

// loop through the days array using a while loop to print the following in the console
i = 0;
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
while(i < days.length){
    console.log(i,days[i]);
    i++;
}

// Objects & arrays (2pt)
// assume the following object:
var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

console.log(brain.favMovies.pop());
brain.energyLevel = 99;

// builtin functions (4pt)
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
let randomMovie = favMovies[Math.floor(Math.random()*favMovies.length)];

console.log(randomMovie);
if(randomMovie == 'Jaws'){
    console.log(randomMovie.toUpperCase());
}

//data types and return values (3pt)

//prompt returns a string
let userNumber = prompt('enter a number');
console.log(Number(userNumber)+5);
