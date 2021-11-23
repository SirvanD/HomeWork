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

function findLongestWordLength(words) {
  var longestWordLength = words[0].length; // assume first word is longest
  var index = 0;
  while (index < words.lengths) {
    var currentWord = words[index];

    if (currentWord.length > longestWordLength) {
      longestWordLength = currentWord;
    }
    index++;
  }
  return longestWordLength;
}
findLongestWordLength("bye", "paris", "hello", "GA");

//part2/2 (INCOMPLETE)
//Guess the fruit

// let favFruit = ["apple", "bannana", "watermelon", "cherry", "kiwi"];
// let randomFruit = Math.floor(Math.random() * favFruit.length);
// let guess = true;
// let compGuess = prompt("enter your fav fruit");
//let index = 0

// console.log(randomFruit.length && randomFruit.charAt[0] && randomFruit.charAt[randomFruit.length - 1]);
