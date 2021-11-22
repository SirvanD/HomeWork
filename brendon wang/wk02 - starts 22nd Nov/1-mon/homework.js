// reading list 

var stealingFire = {
    title : "stealing fire",
    author : "ryan holiday",
    hasRead : true
}
var algorithmsToLiveBy = {
    title : "algorithms to live by",
    author : "brian chrisitan",
    hasRead : true
}
var homoDeus = {
    title : "Homo deus",
    author : "yuval noah harari",
    hasRead : true
}
var fromZeroToOne = {
    title : "from zero to one",
    author : "peter thiel",
    hasRead : true
}
var thePragmaticProgrammer = {
    title : "the pragmatic programmer",
    author : "david thomas",
    hasRead : false
}

var books = [stealingFire, algorithmsToLiveBy, homoDeus, fromZeroToOne, thePragmaticProgrammer];

var i = 0
while (i < books.length){
    console.log(books[i].title + " by " + books[i].author)
    if (books[i].hasRead == true){
        console.log("you have read " + books[i].title)
    } else {
        console.log("you still have to read " + books[i].title)
    }
    i++;
}

// movie database

var birdBox = {
    title : "birdbox",
    duration : 124 ,
    stars : ["sandra bullock", "sarah paulson", "trevante rhodes"]
}
var avengersEndgame = {
    title : "avengers endgame",
    duration : 182,
    stars : ["robert downey jr", "scarlett johansson", "chirs evans"  ]
}

var inception = {
    title : "inception",
    duration : 148,
    stars : ["leonardo dicaprio", "tom hardy", "joseph gordon" ]
}
var movies = [birdBox, avengersEndgame, inception];

function movieInfo(num) {
    console.log(movies[num].title + " last for " + movies[num].duration + "mins. Starring " + movies[num].stars)
}

// combinewords

function combineWords(first, second){
    return first.concat(second)
}

// pluralizer with bonuses

function pluralizer(num, name){
    if (name.slice(-1) == "s" && num == "1") {
        console.log(num + " " + name.slice(0, -1))
    } else if (name.slice(-1) == "s" || num == "1"){
        console.log(num + " " + name)
    } else if (name == "lamb"){
        console.log (num + " sheep")
    } else if (name == "goose"){
        console.log(num + " geese")
    } else {
        console.log(num + " " + name + "s")
    }
}

// word order reverser

function wordReverser(reverseThis){
    return (reverseThis.split(" ").reverse().join(" "))
}

// find longest word length
function findLongestWordLength(array) {
    var i = 0
    var longestWordLength = 0
    while (i < array.length){
        var currentWordLength = array[i].length;
        if (currentWordLength > longestWordLength){
            longestWordLength = currentWordLength;
        }
        i++;
    }
    console.log(longestWordLength)
}

// guess the fruit

var fruits = ["apple", "orange", "banana", "pear"];

var randomFruit = fruits[Math.floor(Math.random()*fruits.length)]

var userGuess = prompt ("its a fruit with " + randomFruit.length + " letters, starting with " + randomFruit[0] + " and ending with " + randomFruit.slice(-1) + " guess the fruit")
var guessCounter = 1

while (userGuess != randomFruit){
    userGuess = prompt ("wrong, try again");
    guessCounter++;
}
alert ("correct you got it in " + guessCounter + "attempts");
