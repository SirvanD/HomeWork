//assessment

//1 arrays
var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

console.log(pantry[1][2][1])

//2 loops

var iteration = 18;

while (iteration > 0){
    if (iteration % 2 == 1){
        console.log(iteration);
    }
    iteration--
}

//loops pt2
var daysIndex = 0;

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

while (daysIndex<days.length){
    console.log(`${daysIndex} ${days[daysIndex]}`);
    daysIndex++
}





// write code to console log the last movie using the brain object above (assume Jaws is the first movie)
// write code to change energyLevel to 99

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

console.log(brain.favMovies[brain.favMovies.length -1])
brain.energyLevel = 99




// write code to randomly select a movie from the favMovies array and store it in a variable
// write code to print the movie in uppercase in the console if the randomly selected movie is Jaws


var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

var selectedMovieIndex = Math.floor(Math.random() * favMovies.length)
console.log(favMovies[selectedMovieIndex].toUpperCase());


// prompt('enter a number');
//  this will return a string value

// whats the data type of the return value of the above function call - string
// write code to add 5 to the number user entered and log it on the console

console.log(Number(prompt('enter a number')) + 5);