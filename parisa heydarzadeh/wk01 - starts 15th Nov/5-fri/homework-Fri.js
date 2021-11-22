// // var pantry = [
//   ["nutella", "honey"],
//   ["pasta", "rice", ["flour", "maple syrup"]],
// ];

// console.log(pantry[1][2][1]);

// // ps Part1

// let n = 17;
// while (n > 0) {
//   console.log(n);
//   n -= 2;
// }

//  ps Part2

// var days = ["Thursday", "Friday", "Saturday", "Sunday"];
// var n = 0;

// while (n < days.length) {
//   console.log(`${n}  ${days[n]}`);
//   n++;
// }

// var brain = {
//   energyLevel: 10,
//   favMovies: [
//     "Jaws",
//     "The Fellowship of the Ring",
//     "Howl's Moving Castle",
//     "Django Unchained",
//     "Cloud Atlas",
//     "The Usual Suspects",
//     "Toy Story",
//     "Conan the Barbarian",
//     "Titanic",
//     "Harry Potter",
//     "Fried Green Tomatoes",
//     "Volver",
//     "Oculus",
//     "Seven",
//     "Black Panther",
//     "Harry Potter",
//     "Imitation of Life",
//     "Snatch",
//     "Fast and Furious",
//   ],
// };

// to log the last movies;
// let lastMovie = brain.favMovies[brain.favMovies.length - 1];
// console.log(lastMovie);

//to change the energylevel to 99
// console.log((brain.energyLevel = 99));

// // builtin Function(4pt)

var favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// var randomMovie = favMovies[Math.floor(Math.random() * favMovies.length)];
// console.log(randomMovie);

var randomMovie = favMovies[Math.floor(Math.random() * favMovies.length)];
if (randomMovie == favMovies[0]) {
  console.log(randomMovie.toUpperCase());
}

// Data types

// prompt('enter a number');

// string is a datatype of above value.

// var Num = prompt("enter a number");
// Num = parseInt(Num);
// console.log(Num + 5);
