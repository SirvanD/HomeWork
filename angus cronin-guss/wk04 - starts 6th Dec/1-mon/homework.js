// Question 1 (Vowel Count)
function vowelCount(str) {
  var vowelList = 'aeiou'
  var countedVowels = 0;
  
  for(var i = 0; i < str.length ; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
       countedVowels += 1;
    }
  } return countedVowels;
}

//Question 2 (Grandma)
var speak = prompt("Say something to Grandma");
var byeCounter = 0;
while (byeCounter !== 2) {
  if (speak === 'BYE') {
    speak = prompt('What?')
    byeCounter = byeCounter + 1;
  } else if (speak === speak.toUpperCase()) {
      speak = prompt("No, not since " + Math.floor(Math.random() * (1950 - 1930 + 1) + 1930))
  } else {
        speak = prompt("HUH?! SPEAK UP, SONNY");
    }
} 
alert('You have left Grandma')



// Question 3 
var users = {
    theresa: {
      party: "Conserative",
      favoriteNumbers: [12, 42, 75]
    },
    Lord_Buckethead: {
      party: "Gremloids",
      favoriteNumbers: [8, 12, 24, 9]
    },
    mr_fishfinger: {
      party: "Independent",
      favoriteNumbers: [12, 14, 85, 99, 1001]
    }
  }
  //accessing conserative
  users.theresa['party'];
  // accessing Gremloids
  users.Lord_Buckethead['party'];
  // changing Mr FishFinger party name
  users.mr_fishfinger['party'] = 'birds eye';