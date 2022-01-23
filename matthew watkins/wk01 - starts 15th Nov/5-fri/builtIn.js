var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


var newFavMovies = favMovies[Math.floor(Math.random() * favMovies.length)];
//var randThisArray = thisArray[Math.floor(Math.random() * thisArray.length)];

console.log(newFavMovies)
if(newFavMovies === `Jaws`) {
    console.log(newFavMovies.toUpperCase())
}
