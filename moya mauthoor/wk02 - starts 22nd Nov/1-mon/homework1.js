// The reading list
let bookList = [
    {title: "Dracula",
    author: "Bram Stoker",
    alreadyRead: true},
    {title: "The Two Towers",
    author: "JRR Tolkien",
    alreadyRead: false},
    {title: "A Little Life",
    author: "Hanya Yanagihara",
    alreadyRead: true},
    {title: "The Mill on the Floss",
    author: "George Elliot",
    alreadyRead: false} 
];

counter = 0;
while (counter < bookList.length) {
    let book = bookList[counter];
    if (book.alreadyRead) {
        console.log(`You've already read "${book.title}" by ${book.author}.`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
    counter++;
}

// The movie database 
let favMovie = {
    title: "Mad Max: Fury Road",
    duration: 120,
    stars: ["Charlize Theron", "Tom Hardy", "Nicholas Hoult", "Hugh Keays-Byrne", "Rosie Huntington-Whiteley"]
};

function movieInfo(movie) {
    let allStars = movie.stars.join(", ");
    return `${movie.title} lasts for ${movie.duration} minutes. Stars: ${allStars}.`;
};

movieInfo(favMovie);

// Combine words
function combineWords(word1, word2) {
    return word1.concat(word2);
}

// The pluralizer
function pluralize(noun, number) {
    let noSingular = ["sheep", "moose", "fish"];
    let irregularPlural = {mouse: "mice", goose: "geese", wolf: "wolves"}

    if (number === 1 || noSingular.includes(noun)) {
        return `${number} ${noun}`;
    } else if (irregularPlural[noun]) {
        return `${number} ${irregularPlural[noun]}`;
    } else {
        let plural = noun.concat("s");
        return `${number} ${plural}`;
    }
}

// Word order reverse
function wordReverse(string) {
    let array = string.split(" ");
    array.reverse();
    let reversedString = array.join(" ");
    return reversedString;
}

// Find longest word length

// Example array: 
// let words = ["my", "cake", "pudding", "buzzcut", "hyperaggression", "rabbit"];

function findLongestWordLength(array) {
    let longestWordLength = 0;
    counter = 0;
    while (counter < array.length) {
        let word = array[counter];
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
        counter++;
    }
    return longestWordLength;
}

