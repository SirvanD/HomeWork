// write a vowelCount function that returns the number of occurrences of vowels in a word. Vowels are a, e, i, o, u

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

function vowelCount(str){
    var numberOfVowels = 0;
    str.split('').forEach(function(letter){
        if (letter.toLowerCase() == 'a' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' || letter.toLowerCase() == 'u'){
            numberOfVowels++
        }
    })
    return numberOfVowels
}



//PART 3 
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
//   1) How would you access theresa's party (i.e. the string "Conservative")?
//   2) How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
//   3) How would you change mr fishfinger's party to "birds eye"?
// 1) users.theresa.party
// 2) users.Lord_Buckethead.party
// 3 users.mr_fishfinger.party = 'birds eye'