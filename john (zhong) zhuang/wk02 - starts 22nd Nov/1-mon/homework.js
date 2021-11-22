// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let readingList = [
    {
        title: "Kingdom of the Cursed",
        author: "Kerri Maniscalco",
        read: true,
    },
    {
        title: "A Shadow in the Ember",
        author: "Jennifer L. Armentrout",
        read: false,
    },
    {
        title: "Salt A World History",
        author: "Mark Kurlansky",
        read: false,
    }
];
let i = 0;
while (i < readingList.length) {
    if (readingList[i].read === true) {
        console.log(`You already read '${readingList[i].title}' by ${readingList[i].author}.`);
    } else {
        console.log(`You still need to read '${readingList[i].title}' by ${readingList[i].author}.`);
    } i++;
};

// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const favMoive = {
    title: "The Shawshank Redemption",
    duration: 140,
    stars: "Tim Robbins, Morgan Freeman, Bob Gunton",
};
function myMovie() {
    return `${favMoive.title} lasts for ${favMoive.duration}. Starts: ${favMoive.stars}.`
}
myMovie();

// Combine Words
// Write a function named combineWords that:

// return a new string that is the combination of the two parameters
// Example:

// combineWords('dog', 'house');
// "doghouse"

function combineWords(x, y) {
    return x.concat(y)
}
combineWords(x, y)

// The Pluralizer
// Write a function named pluralize that:

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(x, y) {
    if (x == 1) {
        return x * 1 + y;
    } else {
        return x * 1 + y + 's';
    }
} pluralize();


// Word Order Reverse
// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

// Example:

// wordReverse('we are good friends') // => "friends good are we"
// wordReverse('I love CSS') // => "CSS love I"

function WordReverse(x) {
    return String(x).split(' ').reverse().join(' ');

}
WordReverse();

// Find Longest Word Length
// Write a function findLongestWordLength that takes an array of words and returns the length of the longest word in the array using a loop.

// findLongestWordLength(['my', 'cake', 'pudding']) // => 7
// findLongestWordLength(['I', 'love', 'css']) // => 4


function findLongestwordLength(x) {
    let i = 0;
    let currentLongest = x[0].length;
    while (i < x.length) {
        let longest = x[i].length;
        if (longest > currentLongest) {
            return (currentLongest = longest);
        }
        i++;
    } return currentLongest;
}
findLongestwordLength();

// Guess the fruit
// You are to create a basic guess the word game.

// step 1
// Prepare a list of your favourite fruits and store it in an appropriate data structure and have the computer select a random fruit as the secret word.

// step 2
// Base on the selected fruit give the use a hint like the example below. you can use prompt, alert or console.log to show the hint

// for example if the secret fruit is "banana"

// hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.
// instead of typing out the hint manually for every fruit. try to use a template string and programmatically work out the starting letter, ending letter and how many characters long.

// step 3
// Allow the user to guess the fruit repeatedly until they guess correctly. keep track of the number of guesses.

// wrong. try again.
// step 4
// Congratulate the user and display number of attempts they made.

// Congrats! you got it in 5 attempts.

let fruit = ['apple', 'orange', 'banana', 'pineapple', 'kiwi'];
let tempFruit = fruit[Math.floor(Math.random() * fruit.length + 1)];
let hint = `it's ${tempFruit.length} characters long. Starts with ${tempFruit[0]} and ends with ${tempFruit[tempFruit.length - 1]}. Guess the fruit.`
let count = 0;
while (count < 5) {
    let userGuess = prompt(hint);
    if (userGuess.toLowerCase() == tempFruit.toLowerCase()) {
        console.log(`Congrates! You got it in 5 attempts!`);
        break;
    } else { console.log('Wrong! Try it again!') };
    count++;
}
