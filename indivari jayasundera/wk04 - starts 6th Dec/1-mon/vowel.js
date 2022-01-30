function vowelCount(word) {
  const wordArray = word.toLowerCase().split("");
  let countVowels = 0;

  for (let i = 0; i < wordArray.length; i++) {
    if (
      wordArray[i] == "a" ||
      wordArray[i] == "e" ||
      wordArray[i] == "i" ||
      wordArray[i] == "o" ||
      wordArray[i] == "u"
    ) {
      countVowels++;
    }
  }
  return countVowels;
}

console.log(vowelCount("speer"));
console.log(vowelCount("Spaghettification"));
