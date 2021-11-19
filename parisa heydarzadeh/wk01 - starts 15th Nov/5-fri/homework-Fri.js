var pantry = [
  ["nutella", "honey"],
  ["pasta", "rice", ["flour", "maple syrup"]],
];

console.log(pantry[1][2][1]);

// loops Part1

let n = 17;
while (n <= 17) {
  n == n - 2;
  console.log(n);
  n--;
}

// Loops Part2

var days = ["Thursday", "Friday", "Saturday", "Sunday"];
var n = 0;

while (n <= days.length) {
  console.log(days[n]);
  n++;
}

var brain = {
  energyLevel: 10,
  favMovies: [
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
  ],
};

console.log(brain.favMovies[18]);

Brain.energyLevel = 99;

// builtin Function(4pt)

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

var randMovie = favMovies[Math.random() * favMovies.length];
console.log(randMovie);

console.log(randMovie.toUpperCase);

//Data types

prompt("enter a number");

//Number is a datatype of above value.
