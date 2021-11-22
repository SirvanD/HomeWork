//The Reading List

let books = [
 {
     "title": "The Hobbit",
     "author": "J.R.R. Tolkien",
     "alreadyRead": false
 },  
 {  "title": "12 rules for life",
    "author": "Jordan Peterson",
    "alreadyRead": true
 },
 {
     "title": "Atomic Habits",
     "author": "James Clear",
     "alreadyRead": true
 } 
]
let counter = 0;
while (counter < books.length) {
    let bookIndex = books[counter];
    if (bookIndex.alreadyRead === true) {
        console.log (`I have read "${bookIndex.title}" By ${bookIndex.author} `);
    } else {
        console.log (`I still need to read "${bookIndex.title}" By ${bookIndex.author} `);
    }
    
    counter ++;
}
//--------------------------------------------------------
//The Movie Database
let favMovie = {
    "title" : "Interstellar",
    "duration": 145,
    "starts": ["Matthew McConaughey", "Anne Hathaway", "Michael Caine" ]
}
function func ()  {
        console.log(`${favMovie.title} lasts for ${favMovie.duration} minutes. Stars: ${favMovie.starts.join()}`);
         
} func();
//--------------------------------------------------------
//Combine Words
function combineWords(word1,word2) {
    console.log (`${word1}${word2}`)
}combineWords('sam','doukchi');
//--------------------------------------------------------
//The Pluralizer
function pluralizer(noun,times){
    if (times > 1) {
        console.log(`${times} ${noun}s`);
    } else if (times == 1){
        console.log(`1 ${noun}`)
    }
}
pluralizer ('light', 5);
pluralizer ('cow', 1);
pluralizer ('pizza', 3);

//--------------------------------------------------------
//Word Order Reverse
function wordReverse(sentence) {
    let reverseSentence = sentence.split(" ").reverse(" ").join(" ");
    console.log (reverseSentence);
   
    
}wordReverse ('I love JavaScript');
//--------------------------------------------------------
//Find Longest Word Length

function findLongestWordLength(wordsArray) {
    let counter4 = 0;    
    let longestWord = 0;
    while (counter4 < wordsArray.length) {
    let currentWord = wordsArray[counter4];
    if (currentWord.length > longestWord) {
        longestWord = currentWord.length;
    }counter4 ++;
}
    console.log (`The longest word has ${longestWord} characters`);
}
 findLongestWordLength(['birthday', 'cake' , 'my', 'happyfriday']);

