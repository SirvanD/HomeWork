//Part one - the reading list
console.log('\n\nPART 1: READING LIST');
let library = [
    {title:'The Hobbit',
    author:'JRR Tolkein',
    alreadyRead:false
    },
    {
    title:'Alice in Wonderland',
    author:'C.S. Lewis',
    alreadyRead:true
    },
    {
    title:'The Hobbit',
    author:'JRR Tolkein',
    alreadyRead:false
    },
    {
    title:'Flash Boys',
    author:'Michael Lewis',
    alreadyRead:false
    }
];

let i = 0;
while (i < library.length){ 
    if(library[i].alreadyRead == true){
        console.log(`you've' read ${library[i].title} by ${library[i].author}`);
    } else {
        console.log(`you still need to read ${library[i].title} by ${library[i].author}`);
    }
    i++;
}


//The Movie Database
//The Reading List
console.log('\n\nPART 2: MOVIE DATABASE');
let movies = [
    {title:'The Hobbit',
    duration: 300,
    stars: ['Dave Chandler','River Phoenix','Steve Buschemi']
    },
    {
    title:'Alice in Wonderland',
    duration: 210,
    stars: ['Johnny Depp','John Tuturro']
    },
    {
    title:'Star Wars',
    duration: 96,
    stars: ['Mark Hamilton','Carey Fischer', 'Harrison Ford','Chewie','Yoda']
    },
    {
    title:'Dune',
    duration: 122,
    stars: ['Christian Fraser','Carter Carter', 'Josh Homme','Zac De La Rocha']
    }
];

//Format Title lasts for duration. Stars: stars - reuse the i variable. Using join only to add a space between the comma and stars name to match question format.
//Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
function movieDatabase(){
    i = 0;
    while (i < movies.length){ 
        console.log(`${movies[i].title} lasts for ${movies[i].duration}mins. Stars: ${movies[i].stars.join(', ')}`);
        i++;
    }
};
movieDatabase();


//The word combiner
console.log('\n\nPART 3: COMBINE WORDS');

function combineWords(word1, word2){
    return word1 + word2;
}
console.log(combineWords('dog','house'));


//The Pluraliser
console.log('\n\nPART 4: PLURALISER');
let collectiveNouns = ['sheep','geese','deer','fish','moose','shrimp'];

function pluralise(word, number){
    if(collectiveNouns.indexOf(word)!=-1 || number == 1){
            console.log(`${number} ${word}`);
    } else {
            console.log(`${number} ${word}s`);
    }
}
pluralise('cow',2);


//Reverse word order
console.log('\n\nPART 5: REVERSE WORD');

function wordReverse(word){
    console.log(word.split(' ').reverse().join(' '));
}

wordReverse('I love CSS');


//Longest Word
console.log('\n\nPART 6: LONGEST WORD');
let wordList = ['lowly', 'interest', 'past', 'ocean', 'follicularly', 'tick', 'apparel', 'numerous', 'capricious', 'alluring', 'clammy', 'wall','me']

function ascSortByLength(list){
    return list.sort((a,b) => a.length - b.length);
}

//for the biggest word
console.log(`longest: ${ascSortByLength(wordList).pop()}`);

//for the smallest word
console.log(`shortest: ${ascSortByLength(wordList).shift()}`);


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

const fruit = [{
    name: 'peaches',
    hint: 'rowers love these'
    },
    {
    name: 'bananas',
    hint: 'yes we have no...'
    },
    {
    name: 'grapes',
    hint: 'wine is from these'
    },
    {
    name: 'mangoes',
    hint: 'go well with peaches'
    },
    {
    name: 'kiwi',
    hint: 'named after a bird'
    }
];
//pick a random fruit
let fruitIndex = Math.floor(Math.random()*fruit.length);
let randomFruit = fruit[fruitIndex].name;
let randomFruitHint = fruit[fruitIndex].hint;
console.log(`random fruit secret word: ${randomFruit}`);
console.log(`hint: it is ${randomFruit.length} letters long, starts with ${randomFruit[0]} and ends with ${randomFruit.split('').pop()} and ${randomFruitHint}. guess the fruit!`);
let guess = '';
let numGuesses = 0;

while (guess !=randomFruit){
    guess = prompt('guess the fruit',`hint: ${randomFruitHint}`);
    
    //give a message if the guess is wrong
    if (guess.toLowerCase() != randomFruit){
        alert('wrong. try again.');
    }
    numGuesses++;
};
alert(`Congrats! you guessed ${randomFruit} in ${numGuesses} attempts.`);