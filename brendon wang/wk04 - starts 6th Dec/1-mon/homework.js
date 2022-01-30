// vowel counter
function vowelCounter(string) {
    var counter = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    var word = string.split("");
    for(let i = 0; i < word.length; i++){
        var letter = word[i]
        for(let i = 0; i < vowels.length; i++){
            if (letter == vowels[i]){
                counter++
            }
        }
    }
    return counter;
}

// speaking to grandma
function speakToGrandma() {
    var counter = 0
    while (counter < 3){
        var string = prompt("say something to grandma")
        if (string == "BYE"){
            counter++;
            alert (`p.s. grandma is ignoring you`)
        } else if (string.toUpperCase() == string){
            alert(`NO, NOT SINCE ${randomYear()}`)
        } else{
            alert (`HUH?! SPEAK UP, SONNY!`)
        }
    }
    alert("grandma let you go")
}

function randomYear(){
    var randomYear = Math.floor(Math.random()*21) + 1930
    return randomYear
}

// Lord buckethead

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

//   How would you access theresa's party (i.e. the string "Conservative")?
console.log(users.theresa.party)
//   How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
console.log(users.Lord_Buckethead.party)
//   How would you change mr fishfinger's party to "birds eye"?
users.mr_fishfinger.party = "birds eye"