// write code to log maple syrup in the console using the the pantry array above

var pantry = [
    ['nutella', 'honey'],
    ['pasta', 'rice', ['flour', 'maple syrup']]
  ]

  pantry[1][2][1]

//   loops (5pt)

// using a while loop print the following in the console:
num1 = 17;

while (num1 >= 0) {
    console.log(num1)
num1 = num1 - 2;
}

// ////////FIXED

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
var i = -1;

while( i  < days.length ) {
  i++;
  console.log(i , days[i]) 
 }





// //// OBJECTS AND ARRAYS
 var brain = {
    energyLevel: 10,
    favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
  }
  brain.favMovies[brain.favMovies.length - 1] 
  brain.energyLevel = 99 ;


//   //builtin functions (4pt)
  var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// i found this online but it's not working. I've tried the Math.floor but couldnt get it to work. I'll work on this over the weekend. 

var random = favMovies[Math.floor(Math.random()*favMovies.length)];


if (random == favMovies[0]) {
   console.log (random.toUpperCase())
}

// //   data types and return values (3pt)

// part 1 ANSWER = 'String'

var num1 = Number(prompt('enter a number'));
num1 = num1 + Number(5);
console.log(num1)
