// var leakedMembers = ['dt','aden','allison','bern','callum','cath','felipe','jian','jimmy','linda','matt','naveen','ned','peter','sam','sannan','sara','stephen','stuart','tom'];

// leakedMembers[0] = 'misty rose';

// .indexOf - a built in function to get the computer to tell you the index of a certain thing in an array

// .charAt - is a string function

// console.log(leakedMembers.push('ryan','maya')); // adding two names to the list 

// console.log(leakedMembers.unshift('dt')); // adding dt to start of the list 


// let i = 0;
// // 
// while (i < leakedMembers.length) {
//     let leakedMembersSplit = leakedMembers[i].split("");
//     if (leakedMembersSplit.length == 3|| leakedMembersSplit.length == 5) {
//     console.log(leakedMembers[i]);
//     } i++;
// }

// var books = [
//     {
//     title: 'The Body Keeps Score', author: 'Bessel van der Kolk', alreadyRead: true 
//     },

//     {
//     title: 'The Men Who Stare at Goats', author: 'Jon Ronson', alreadyRead: true
//     },

//     {
//     title: 'Awakenings', author: 'Oliver Sacks', alreadyRead: false
//     },

//     {
//     title: 'The Ultimate Happiness Prescription', author: 'Deepak Chopra', alreadyRead: true
//     }
//     ];

// let count = 0; 
// while (count < books.length) {
//     if (books[count].alreadyRead == true) {
//         console.log(`You have read ${books[count].title} by ${books[count].author}`);
//     } else if (books[count].alreadyRead == false) {
//         console.log(`You still need to read ${books[count].title} by ${books[count].author}`);
//     }
//     count++;
// }



// the movie database
// create an object to store info on your fave movie

// var favMovie = {
//     name: 'Thor',
//     duration: 190,
//     starring: ['Chris Hemsworth', ' Tessa Thompson', ' Taika Waititi', ' and Kate Blanchett']
// }


// function theMovie() {
//     console.log(`${favMovie.name} lasts for ${favMovie.duration} minutes. It stars ${favMovie.starring}`);
// }
// theMovie(); 


// Combining words

// function combineWords(one, two) {
//     console.log(one+two)
// }
// combineWords();

//pluralising
// let number = 1;
// let noun = 'dog';
// needs 2 inputs, a number and a noun 


// function pluralize(noun, number) {
//     if (number > 1) {
//         console.log(number +' '+ noun + 's'); 
//     } else {
//         console.log(number + noun)
//     }
// }
    //   return number > 1 ? pluralWord : singularWord; - the short hand for the above


// word order reverse

// function reverseString(s){
//     return s.split("").reverse().join("");
// }
// reverseString("Hello");


//  Find longest word length
// function findlongestWord(array) {
//     var i = 0;
//     var longestWord = array[i];
//     while (i < array.length) {
//         var currentWord = array[i]; 
//         if(i > 0) {
//             var currentWordLength = currentWord.length;
//             if(currentWordLength > longestWord.length) {
//                 longestWord = currentWord;
//             }
//         }
//        i ++;
//     } 
//     console.log(longestWord.length) 
// }
// findlongestWord(['hannah', 'ren', 'bananaaa']);

//i is index 0, while the length of the array is less than the index of the word, the loop will continue

// what I should improve on: 
// 