// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

// Example:

// wordReverse('we are good friends') // => "friends good are we"
// wordReverse('I love CSS') // => "CSS love I"

function wordReverse(sentence){
    reverseSentence = sentence.split(" ").reverse();
    return reverseSentence.join(" ");
};
