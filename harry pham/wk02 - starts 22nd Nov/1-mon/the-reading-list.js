// // The Reading List

// var books = [[
//     title = "Harry Potter: Philosipher's stone",
//     author = "J. K. Rowling",
//     read = true,
// ], 
// [
//     title = "The Stranger in the Lifeboat",
//     author = "Mitch Albom",
//     read = false,
// ], 
// [
//     title = "The Fellowship of the Ring",
//     author = "J. R. R. Tolkien",
//     read = false,
// ]]

// if (books[0][2] == true){
//     console.log("you have already read " + books[0][0] + " by " + books[0][1])
// } else {
//     console.log("you still need to read " + books[0][0] + " by " + books[0][1])
// }
// if (books[1][2] == true){
//     console.log("you have already read " + books[1][0] + " by " + books[1][1])
// } else {
//     console.log("you still need to read " + books[1][0] + " by " + books[1][1])
// }
// if (books[2][2] == true){
//     console.log("you have already read " + books[2][0] + " by " + books[2][1])
// } else {
//     console.log("you still need to read " + books[2][0] + " by " + books[2][1])
// }


// // Movie Database

// var movies = [
//     title = "Avengers: the End Game",
//     duration = 3,
//     stars = ["Robert Downey Jr.", " Scarlet Johansson", " Chris Evans"]
// ]

// function movieInfo(){
//     console.log(title + " lasts for " + duration + " hours. Stars: " + stars)
// }

// movieInfo()


// // Combine Words

// function combineWords(first, second) {
//     return(first + second)
// }
// combineWords()


// //Pluralizer

// function pluralize(number, noun) {
//     if(number !== 1 && noun == "goose"){
//         return(number + " geese")
//     } else if(number !== 1 && noun == "wolf"){
//         return(number + " wolves")
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

function findLongestWordLength(wordsArray) {
    var temp;
    let i = 0
    temp = wordsArray[0]
    while(i < wordsArray.length - 1){
        var currentWord = wordsArray[i]
        var nextWord = wordsArray[i + 1]
        if(temp === undefined && currentWord.length > nextWord.length){
            temp = currentWord
        } else if(temp !== undefined && temp.length < nextWord.length){
            temp = nextWord
        } 
        //creates a loop to define what word ends up with the most letters
    i++;
}
 console.log("temp", temp + " with " + temp.length + " letters")
}

findLongestWordLength(["asdf", "asdfasdf", "asdfas"])
