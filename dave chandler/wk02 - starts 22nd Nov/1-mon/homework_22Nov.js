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
    console.log(word.split('').reverse().join(''));
}

wordReverse('supercalafragalisticexpialidocious');


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