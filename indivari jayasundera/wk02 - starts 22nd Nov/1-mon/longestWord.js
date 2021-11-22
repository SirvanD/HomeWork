function longestWord(wordArray) {
  let i = 0;
  longest = wordArray[i].length;

  while (i < wordArray.length) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
    }
    i++;
  }
  console.log("Length the of the longest word is: " + longest);
}

var name = ["John", "Alexandra", "payson", "tom"];

longestWord(name);
