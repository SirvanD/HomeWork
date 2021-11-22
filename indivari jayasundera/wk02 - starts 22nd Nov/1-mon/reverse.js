function reverseArray(phrase) {
  var phraseArray = phrase.split(" ");
  phraseArray.reverse();
  for (let i = 0; i < phraseArray.length; i++) {
    console.log(phraseArray[i]);
  }
}

reverseArray("Hello World Enjoy Your Day");
