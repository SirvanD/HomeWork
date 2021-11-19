// write code to log maple syrup in the console using the the pantry array above

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

  pantry[0].push('maple syrup')


//   loops (5pt)

// using a while loop print the following in the console:
// counter = 0;

//THIS IS NOT WORKING I'VE SKIPPED IT
// counter = 0;
// function oddNumbers() {
// while ( counter <= 19) {
//     counter++;
// }
// }

// oddNumbers() ; 

//////////////////////////////////////////////////////////

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']

while (days.length < 3 ){
    days.length++;
}
 console.log(days)

//// OBJECTS AND ARRAYS
 var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }
  brain.favMovies['18'] ;
  brain.energyLevel = 99 ;


  //builtin functions (4pt)
  var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// i found this online but it's not working. I've tried the Math.floor but couldnt get it to work. I'll work on this over the weekend. 
  favMovies.random()
  favMovies[1].toUpperCase

//   data types and return values (3pt)

var num1 = Number(prompt(enter a number));
num1 = num1 + '5';
console.log(num1)
