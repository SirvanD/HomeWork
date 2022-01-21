// Objects & arrays (2pt)
// assume the following object:

// var brain = {
//   energyLevel: 10,
//   favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
// }
// write code to console log the last movie using the brain object above (assume Jaws is the first movie)
// wirte code to change energyLevel to 99

// var dog = ['puppy', 'boxer', 'alpaca'];

var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }

  console.log(brain.favMovies[brain.favMovies.length - 1]);

 brain.energyLevel= 99;
 console.log(brain.energyLevel);