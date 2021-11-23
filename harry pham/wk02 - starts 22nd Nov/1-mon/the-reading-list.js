// // The Reading List

// var books = {
//         list: [
//             {
//             title: "Harry Potter: Philosipher's stone",
//             author: "J. K. Rowling",
//             read: true
//             }, 
//             {           
//             title: "The Stranger in the Lifeboat",
//             author: "Mitch Albom",
//             read: false
//             },
//             {
//             title: "The Fellowship of the Ring",
//             author: "J. R. R. Tolkien",
//             read: false
//             }

//         ]
// }

// i = 0
// while(i < books.list.length){
//     if(books.list[i]["read"] === true){
//         console.log("you have already read " + books.list[i]["title"] + " by " + books.list[i]["author"])
//     } else {
//         console.log("you have yet to read " + books.list[i]["title"] + " by " + books.list[i]["author"] + ", chop chop!")
//     }
//     i++;
// }


// // Movie Database

var movies =
    {
    title: "Avengers: the End Game",
    duration: 3,
    stars: ["Robert Downey Jr.", " Scarlet Johansson", " Chris Evans"]
    }


function movieInfo(){
    console.log(movies.title + " lasts for " + movies.duration + " hours. Stars: " + movies.stars)
}

movieInfo()


// // Combine Words

// function combineWords(first, second) {
//     return(first + second)
// }
// combineWords()


// //Pluralizer

// function pluralize(number, noun) {
//     if(number !== 1){
//         return(number + " " + noun + "s")
//     } else{
//         return(number + " " + noun)
//     }
// }

// pluralize()


// // Word Oder Reverse

// function wordReverse(sentence){
//     let arrayed = String(sentence).split(" ");
//     return(String(arrayed.reverse().join(" ")))
// }

// wordReverse();


// Find Longest Word Length

// function findLongestWordLength(wordsArray) {
//     var temp;
//     let i = 0
//     temp = wordsArray[0]
//     while(i < wordsArray.length - 1){
//         var currentWord = wordsArray[i]
//         var nextWord = wordsArray[i + 1]
//         if(temp === undefined && currentWord.length > nextWord.length){
//             temp = currentWord
//         } else if(temp !== undefined && temp.length < nextWord.length){
//             temp = nextWord
//         } 
//         //creates a loop to define what word ends up with the most letters
//     i++;
// }
//  console.log("temp", temp + " with " + temp.length + " letters")
// }

// findLongestWordLength(["asdf", "asdfasdf", "asdfas"])
