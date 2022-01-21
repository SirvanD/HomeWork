// Write a function findLongestWordLength that takes an array of words and returns the length of the longest word in the array using a loop.

// findLongestWordLength(['my', 'cake', 'pudding']) // => 7
// findLongestWordLength(['I', 'love', 'css']) // => 4



function findLongestWordLength(array){
    var longest = 0;
    var wordIteration = 0;
    while (wordIteration < array.length){
        if (array[wordIteration].length > longest){
            longest = array[wordIteration].length;
        }
        wordIteration++
    }
    return longest;
}