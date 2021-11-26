// Question 1

var books = [{
    title: 'Dotcom Secrets',
    author: 'Russel Brunson',
    alreadyRead: true,
},
{
    title: "That will never work",
    author: "Marc Randolf",
    alreadyRead: true,
},
{
    title: "Brief answers to big questions",
    author: "Stephen Hawking",
    alreadyRead: true,
},
{
    title: "Never split the difference",
    author: "Chris Voss",
    alreadyRead: false,
}];

// while (counter < books[0].length) {
//     var counter = counter + 1; 
//     if (books[0].alreadyRead == 'true') {
//     console.log(books[0].title + " by " + books[0].author + "I have alreadyRead this book.");
//     } else { 
//         console.log(books[0].title + " by " + books[0].author + " i have not alreadyRead this book." );
//     }
// }

for (var i = 0; i < books.length; i++) {
    var myBooks = books[i].title + " by " + books[i].author;
    if (books[i].alreadyRead === true) {
        console.log(myBooks + " I read this book");
    } else {
        console.log(myBooks + " I haven't read this book yet");
    }
}


// var favMovie = {
//     title: "Step Brothers",
//     duration: 90,
//     stars: ["Will ferral", "John Reilly"],
// };
//  function favouriteMovie (favMovie) {
//      console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars ' + favMovie.stars.join(', '));
//    }
// favouriteMovie(favMovie);

// //Question 3
// function addWords (str1, str2) {
// return str1 + str2; 
// }
// console.log(addWords("dog", "house"));



// // Question 4
// function pluralize (noun, number) {
//     counter = number;
//     if (counter > 1) {
//         return `${number} ${noun}s`
//     } else {
//         return `${noun} ${number}`
//     } 
// }
// console.log(pluralize('cat', 1));


//Question 5
function reverseString(str) {
    console.log(str.split(" ").reverse().join(" "))
     
  }
reverseString("Hello there");

// function reverseSent(sentence){
//     var result = "";
//     var split = sentence.split(" ");
  
//     for (var i = split.length - 1; i >= 0; i--){
    
//      if (i ==split.length - 1) {
//             result += "";
//       }
//       else {
//           result += " ";
//       }
    
//       result += split[i];
//       var words = result;
//     }
//     return '"' + words + '"';
//   }
// // // Question 6
// function longestWord (bugs) {
//     var wordLength = bugs[0].length
//     var index = 0;
//     while (index < words.length) {
//         var currentWord = words[index];
//      if (currentWord.length > wordLength.length) {
//         var longestWord = currentWord.length;
// } index = index + 1;
// } return longestWord;
// }
// var bugs = ['ant', 'spider', 'beetle', 'butterfly'];

// function findLongestWordLength(array) {
//     for (var i = 0; i < findLongestWordLength.length; i++) {
//         if (array[i].length > long) {
//             var long = array[i].length;
//             longest = array[i];
//         }
//     }
//     return longest.length;

//}
