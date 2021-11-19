// Question 1 

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
];
console.log(pantry[1][2][1]);

// Question Loops 1

var loop1 = (-1);
while (loop1 <= 15) {
    loop1 = loop1 + 2;
    console.log(loop1);   
}

// Questions Loops 2
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
var count = (-1);
    while (count < 3) {
        count = count + 1;
    console.log(count + " " + days[count])
    };

// Objects 1

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  };

console.log(brain.favMovies.slice(-1));

var prompt = Number(prompt('enter a number'));
// data type is a string

var input = Number(prompt) + 5;
console.log(input);
