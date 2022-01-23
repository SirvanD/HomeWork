// Homework part1/2

//the reading list
// let book = [
//   {
//     title: "search of lost times",
//     Author: "Marcel Proust",
//     read: true,
//   },
//   {
//     title: "War and peace",
//     Author: "Leo Tolstoy",
//     read: true,
//   },
//   {
//     title: "Hamlet",
//     Author: "William Shekespeare",
//     read: false,
//   },
// ];

// var index = 0;
// while (index < book.length) {
//   var theBook = book[index].title + " " + "by " + book[index].Author + " ";
//   if (book[index].read) {
//     console.log("You already read this" + " " + theBook);
//   } else {
//     console.log("You still need to read" + " " + theBook);
//   }
//   index++;
// }

//The Movie Database

// let favMovie = {
//   title: "Inception",
//   duration: 120,
//   stars: ["Decaprio", "Joseph Gordon", "Tom Hardy"],
// };

// console.log(
//   favMovie.title +
//     " " +
//     "lasts for " +
//     " " +
//     favMovie.duration +
//     "mins. " +
//     "stars: " +
//     favMovie.stars
// );

//Combine Words

// function combineWords(str1, str2){
//  return str1 + str2
// }
// var result combineWords("fast", "food") + '!'

// console.log(result)

// The Pluralizer

// function pluralize(object, num) {
//   if (num >= 2) {
//     return `${num} ${object}s`
//   } else {
//     return `${num} ${object}`

//   }
// }
// pluralize("bag", 2);

//WordOrder Reverse

// function wordReverse(string) {
// var stringArray = string.split(" ");
// stringArray.reverse();
// stringArray.join(" ");
// console.log(stringArray);
// }
// wordReverse("Hello my name is Paris");

//find longest Word Length

// function findLongestWordLength(words) {

//   var longestWordLength = words[0].length; // assume first word is longest

//   var index = 0;
//   while (index < words.lengths) {
//     var currentWord = words[index];

//     if (currentWord.length > longestWordLength) {
//       longestWordLength = currentWord;
//     }
//     index++;
//   }
//   return longestWordLength;
// }
// findLongestWordLength()

//part2/2 (INCOMPLETE)
//Guess the fruit

let fruit = ["apple", "bannana", "watermelon", "cherry", "kiwi"];
let answer = fruit[Math.floor(Math.random() * fruit.length)];
console.log(
  `${answer.length} + ${answer.charAt(0)} + ${answer.charAt(answer.length - 1)}`
);

for (guess = 0; guess++; ) {
  var guess = prompt("what's your guess");
  if ((guess = "incorrect")) {
    console.log("wrong, try again.");
  } else {
    ("congrats, you got it in ");
  }
}

// let randomFruit = fruit[randomFruit];

//  let guess = true;

// let index = 0
// let hint =randomFruit.length && randomFruit.charAt[0] && randomFruit.charAt[randomFruit.length - 1]
// while(index < favFruit.length){
//   if (index )

// console.log()

// Write a function called countDown that accepts a single number as argument.

// function countDown(number) {
//   while (number >= 1) {
//     console.log(number);
//     number--;
//   }
//   console.log("forking legends");
// }
