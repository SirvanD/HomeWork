// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: false
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        alreadyRead: true
    },
    {
        title: "Book1",
        author: "author1",
        alreadyRead: false
    },
    {
        title: "Book2",
        author: "author2",
        alreadyRead: true
    }
]
var index = 0;
while (index < books.length) {
    console.log(`${books[index].title} by ${books[index].author}`);
    index++;
}
index = 0;
while (index < books.length) {
    if (books[index].alreadyRead == true) {
        console.log(`You already read "${books[index].title}" by ${books[index].author}.`)
    } else {
        console.log(`You still need to read "${books[index].title}" by ${books[index].author}.`)
    }
    index++;
}

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
    title: "The rabbits",
    duration: 135,
    stars: ["Harry", "Tom", "Bill", "Peter"]
};
var names = favMovie.stars.toString().replaceAll(',', ', ');

function info(favMovie) {
    console.log(`${favMovie.title} lasts for ${favMovie.duration} minutes. Stars ${names}.`);
}

// Combine Words
// Write a function named combineWords that:

// return a new string that is the combination of the two parameters
// Example:

// combineWords('dog', 'house');
// "doghouse"


function combineWords(wordA, wordB) {
    var result = wordA.concat(wordB);
    console.log(result);
}


// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize(noun, number) {
    var collective = ['sheep', 'crowd', 'government', 'team', 'family', 'audience', 'committee', 'gang', 'staff', 'band', 'orchestra', 'choir', 'police'];

    if (number >= 2) {
        if (noun.slice(-2) == "ss" | noun.slice(-2) == "sh" | noun.slice(-2) == "ch") {
            console.log(`${number} ${noun}es`);
        } else if (noun.slice(-1) == "s" | noun.slice(-1) == "x" | noun.slice(-1) == "z") {
            console.log(`${number} ${noun}es`);
        } else if (noun.slice(-1) == "f") {
            console.log(`${number} ${noun.substring(0, (noun.length - 1))}ves`);
        } else if (noun.slice(-2) == "fe") {
            console.log(`${number} ${noun.substring(0, (noun.length - 2))}ves`);
        } else if (collective.indexOf(noun) >= 0) {
            console.log(`${number} ${noun}`)
        } else {
            console.log(`${number} ${noun}s`)
        }
    } else {
        console.log(`${number} ${noun} `);
    }
}

pluralize("dog", 3);
pluralize("wolf", 3);
pluralize("sheep", 4);

// Word Order Reverse
// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

// Example:

// wordReverse('we are good friends') // => "friends good are we"
// wordReverse('I love CSS') // => "CSS love I"


function wordReverse(sentence) {
    word = sentence.split(" ");
    reverse = word.reverse();
    console.log(reverse.join(" "))
}

wordReverse("I love CSS");

// Find Longest Word Length
// Write a function findLongestWordLength that takes an array of words and returns the length of the longest word in the array using a loop.

// findLongestWordLength(['my', 'cake', 'pudding']) // => 7
// findLongestWordLength(['I', 'love', 'css']) // => 4

var words = [];
var tempLength = 0;
function findLongestWordLength(words) {
    for (i = 0; i < words.length; i++) {
        if (words[i].length > tempLength) {
            tempLength = words[i].length;
        }
    }
    console.log(tempLength);
}

