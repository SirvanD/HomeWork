// Question 1
var books = [{
    title: 'Dotcom Secrets',
    author: 'Russel Brunson',
    read: true,
},
{
    title: "That will never work",
    author: "Marc Randolf",
    read: true,
},
{
    title: "Brief answers to big questions",
    author: "Stephen Hawking",
    read: true,
},
{
    title: "Never split the difference",
    author: "Chris Voss",
    read: false,
}];
// function readBooks (books){
//     for (var i = 0; i < books.length; i++) {
        
//         var myBooks = books.title + " by " + books.author + ". ";
//         if (books[2] = true) {
//             console.log(myBooks + "I have read this book");
//         } else {
//             console.log(myBooks + "I haven't read this book yet");
//     }
// }
// }
// readBooks();
// Question 2
// var favMovie = {
//     title: "Step Brothers",
//     duration: 90,
//     stars: ["Will ferral", "John Reilly"],
// };
//  function favouriteMovie (favMovie) {
//      console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars ' + favMovie.stars.join(', '));
//    }
// favouriteMovie(favMovie);

//Question 3
function addWords (str1, str2) {
return str1 + str2; 
}
console.log(addWords("dog", "house"));



// Question 4
function pluralize (noun, number) {
    counter = number;
    if (counter > 1) {
        return `${number} ${noun}s`
    } else {
        return `${noun} ${number}`
    } 
}
console.log(pluralize('cat', 1));


//Question 5
function reverseSent(sentence){
    var result = "";
    var split = sentence.split(" ");
  
    for (var i = split.length - 1; i >= 0; i--){
    
     if (i ==split.length - 1) {
            result += "";
      }
      else {
          result += " ";
      }
    
      result += split[i];
      var words = result;
    }
    return '"' + words + '"';
  }
// // Question 6
function longestWord (bugs) {
    var wordLength = bugs[0].length
    var index = 0;
    while (index < words.length) {
        var currentWord = words[index];
     if (currentWord.length > wordLength.length) {
        var longestWord = currentWord.length;
} index = index + 1;
} return longestWord;
}
var bugs = ['ant', 'spider', 'beetle', 'butterfly'];

// function findLongestWordLength(array) {
//     for (var i = 0; i < findLongestWordLength.length; i++) {
//         if (array[i].length > long) {
//             var long = array[i].length;
//             longest = array[i];
//         }
//     }
//     return longest.length;

}
