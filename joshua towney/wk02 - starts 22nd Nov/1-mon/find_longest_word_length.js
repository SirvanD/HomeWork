// Write a function findLongestWordLength that takes an array of words and returns the length of the longest word in the array using a loop.

// findLongestWordLength(['my', 'cake', 'pudding']) // => 7
// findLongestWordLength(['I', 'love', 'css']) // => 4

// function findLongestWord(string) {
//     var splitString = string.split(' ');
//     var longestWord = '';
//     var counter = 0;
//     while (counter < splitString.length) {
//       if(splitString[counter].length > longestWord.length){
//            longestWord = splitString[counter];
//        } counter = counter + 1
//     }
//    return(longestWord);
//   }

// function findLongestWordLength(words) {

//   var longestWordLength = words[0].length;
//   var counter = 0;

//   while (counter < words.length) {
//     var currentWord = words[counter]

//     if (currentWord.length > longestWordLength) {
//       longestWordLength = currentWord.length
//     }
//     counter = counter + 1;
//   }
//   return longestWordLength
// }

function findLongestWordLength(inputWords) {
  
  var longestWordLength = inputWords[0].length;
  var index = 0;
  
  while (index < inputWords.length) {
    var currentLongestWord = inputWords[index];

    if (currentLongestWord.length > longestWordLength) {
      longestWordLength = currentLongestWord.length;
    }
    index++;
  } 
  return longestWordLength
}
