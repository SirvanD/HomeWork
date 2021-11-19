// Data Structures - Arrays (1 pt)

// ]
// 1.write code to log maple syrup in the console using the the pantry array above
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
]
console.log (pantry[1][2][1]);



//---------------------------------------------------------------------


// loops (5pt)
// using a while loop print the following in the console:
// 17
// 15
// 13
// 11
// 9
// 7
// 5
// 3
// 1

let counter = 17;
while (counter >= 1) {
    console.log(counter);
    counter -= 2;
}
//---------------------------------------------------------------------



// 2.loop through the days array using a while loop to print the following in the console
// 
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
let counter2 = 0;
while (counter2 < days.length) {
    console.log (`${counter2} ${days[counter2]}`);
    counter2 ++;
}
//---------------------------------------------------------------------



// Objects & arrays (2pt)
// assume the following object:

var brain = {
  energyLevel: 10,
  favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
}
// 1.write code to console log the last movie using the brain object above (assume Jaws is the first movie)
// 2.wirte code to change energyLevel to 99

console.log (brain.favMovies[brain.favMovies.length - 1]);
brain.energyLevel = 99;
console.log(brain.energyLevel);


//---------------------------------------------------------------------



// builtin functions (4pt)
var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// 1.write code to randomly select a movie from the favMovies array and store it in a variable
// 2.write code to print the movie in uppercase in the console if the randomly selected movie is Jaws

let randomNum = Math.floor (Math.random() * favMovies.length );
console.log (favMovies[randomNum].toUpperCase());
//---------------------------------------------------------------------




// data types and return values (3pt)
prompt('enter a number');
// 1.whats the data type of the return value of the above function call
// 2.write code to add 5 to the number user entered and log it on the console

//answer: String
let userInput = Number(prompt('enter a number'));
console.log (userInput + 5);
//---------------------------------------------------------------------
