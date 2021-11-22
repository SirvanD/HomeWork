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

for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var myBooks = book.title + " by " + book.author;
    if (book.Read) {
        console.log(myBooks + " I read this book");
    } else {
        console.log(myBooks + " I haven't read this book yet");
    }
}

// Question 2
var favMovie = {
    title: "Step Brothers",
    duration: 90,
    stars: ["Will ferral", "John Reilly"],
};
 function favouriteMovie (favMovie) {
     console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars ' + favMovie.stars.join(', '));
   }
favouriteMovie(favMovie);

//Question 3

function combineWords (word1, word2) { 
    var word1 = "dog";
    var word2 = "house";
   return String(word1) + String(word2); 
}
combineWords();

 // Question 4
 function pluralize (noun, number) {
    if (number < 1 && noun == 'cat' || noun == 'horse') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
}
}


//Question 5
var words = "Hello my name is Angus";
function wordReverse(sentance) {
   return sentance.split("").reverse().join("");
}
wordReverse(words);

// Question 6
var bugs = ['ant', 'spider', 'beetle', 'butterfly'];

function findLongestWordLength(array) {

    var long = 0;
    var longest = '';

    for (var i = 0; i < findLongestWordLength.length; i++) {
        if (array[i].length > long) {
            var long = array[i].length;
            longest = array[i];
        }
    }
    return longest.length;

}
