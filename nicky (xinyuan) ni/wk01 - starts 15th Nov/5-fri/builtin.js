var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howls Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

var moiveNum = Number(Math.floor(Math.random() * favMovies.length))

if(moiveNum == 0){
   console.log(favMovies[moiveNum].toUpperCase())  
} else {
   console.log(favMovies[moiveNum]);
}



