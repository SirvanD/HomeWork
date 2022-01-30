//this is my vowel count attempt



function vowelCount(str) {
    var vowelsCount = 0;
  
    //turns the function input into a string so it can looped through correctly
    var string = str.toString();
  
    //have a counter read through the length of a word
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel is detected in the string it increments the counter ++
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    //then return the counter 
    return vowelsCount;
  }