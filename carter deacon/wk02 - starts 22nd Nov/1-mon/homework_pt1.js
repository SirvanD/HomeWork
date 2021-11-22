// The Reading List
var bookArray = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        read: false,
    },
    {
        title: 'Hatching Twitter',
        author: 'Nick Bilton',
        read: true,
    }, 
    {
        title: 'Harry Potter',
        author: 'J.K Rowling',
        read: true,
    }
]
let i = 0;
while (i < bookArray.length) {
    if (bookArray[i].read == false) {
        console.log(`You still need to read "${bookArray[i].title}" by ${bookArray[i].author}.`)
    } else {
        console.log(`You've already read ${bookArray[i].title}" by ${bookArray[i].author}.`)
    }  
    i++;
}

// The Movie Database
let myFavMovie = {
    title: 'Interstellar',
    duration: 169,
    stars: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
}

function movieData() {
    console.log(`${myFavMovie.title} runs for ${myFavMovie.duration} and stars ${myFavMovie.stars}.`)
}

movieData();

// Combine words
function combineWords(word1, word2) {
    let fullWord = word1+word2;
    return fullWord;
}

combineWords();

// The pluraliser (Note: This doesn't feel like how we were meant to do this one (?) so any feedback is welcome!)
function pluralize(num, word) {
    if (num > 1) {
        return (num + ` ${word}` + 's')
    }
}

pluralize();

// Word Order Reverse
function wordReverse(string) {
    const stringArr = string.split(" ");
    const reverseArr = stringArr.reverse();
    return reverseArr.join(' ')
} 

// example string for testing = "this should be totally reversed dude"
wordReverse("");

// Find longest word length
let word = "";

function findLongestWordLength(arr) {
    for (let counter = 0; counter < arr.length; counter++) {
        if (word.length < arr[counter].length) {
            word = arr[counter];
        }
    }
    return word;
}
// example Array for testing = ["test", "length", "general", "assembly"]
findLongestWordLength([]); 