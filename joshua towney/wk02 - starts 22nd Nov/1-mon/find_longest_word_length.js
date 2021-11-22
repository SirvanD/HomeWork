// Write a function findLongestWordLength that takes an array of words and returns the length of the longest word in the array using a loop.

// findLongestWordLength(['my', 'cake', 'pudding']) // => 7
// findLongestWordLength(['I', 'love', 'css']) // => 4

function findLongestWord(string) {
    var splitString = string.split(' ');
    var longestWord = '';
    var counter = 0;
    while (counter < splitString.length) {
      if(splitString[counter].length > longestWord.length){
           longestWord = splitString[counter];
       } counter = counter + 1
    }
   return(longestWord);
  }