//  Question 1 

// Part 1 write code to log maple syrup in the console using the the pantry array above

// var pantry = [
//     ['nutella', 'honey'],
//     ['pasta', 'rice', ['flour', 'maple syrup']]
//   ]

//   console.log(pantry[1][2][1])

//  Question 2

// Part 1 - using a while loop print the following in the console:
// 17
// 15
// 13
// 11
// 9
// 7
// 5
// 3
// 1

// var number = 17;

// while (number < 18 && number > 0) {
//     console.log(number);
//     number = number - 2;
// }

// Part 2

// loop through the days array using a while loop to print the following in the console 

// // 0 Thursday
// // 1 Friday
// // 2 Saturday
// // 3 Sunday

// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
// var number = 0;

// while(number < days.length){
//   console.log(number,days[number]);
//   number = number + 1;
// }

// Question 3
// Part 1

// var brain = {
//     energyLevel: 10,
//     favMovies: ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
//   }

// assuming Jaws is the first movie, to print the last movie in the console log you'd write in the console log:

// console.log(brain.favMovies[brain.favMovies.length-1])

// wirte code to change energyLevel to 99

// first you'd call the array to see what the energy level is by writing:
// console.log(brain.energyLevel)
// then you'd see the level is 10. to change it to 99 you'd write 
// console.log(brain.energyLevel = 99)
// check the array again and then brain.energyLevel will show 99


// Question 4
//Part 1

// var favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// write code to randomly select a movie from the favMovies array and store it in a variable

// Part 2
// write code to print the movie in uppercase in the console if the randomly selected movie is Jaws

// let generate = Math.floor((Math.random() * favMovies.length));
// let randomMovie = favMovies[generate];
// if (randomMovie == 'Jaws'){
//     console.log("JAWS");
// }


// Question 5
// Part 1

// prompt('enter a number');

// whats the data type of the return value of the above function call
// a string

// Part 2

// write code to add 5 to the number user entered and log it on the console
// var a = Number(prompt("Enter first number"));
// console.log(a + 5)