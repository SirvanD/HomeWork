// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

// Example:

// wordReverse('we are good friends') // => "friends good are we"
// wordReverse('I love CSS') // => "CSS love I"


function reverseString(str) {
    var userInput = str.split(' ');
    var reversedArray = userInput.reverse();
    var printThis = reversedArray.join(' ');
    console.log(printThis);
}

// 'we are good friends'.split(' ').reverse().join(' '); much shorter way of doing this