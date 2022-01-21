
// function vowelCount(str) { 

//     // find the count of vowels
//     let vowels = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return vowels;
// }



// function numberVowels(str) {
//     var vowelsCount = 0;
  
//     //turn the input into a string
//     var string = str.toString();
  
//     //loop through the string
//     for (var i = 0; i <= string.length - 1; i++) {
  
  
//       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }

 

var byeCounter = 0;
var randomYears = [ "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943","1942", "1941", 
   "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930"]

function grandma() {
 
   var heySonny = prompt("HI SONNY!");

    
    while (byeCounter < 10) {
 
        if (heySonny != 'BYE'){ // if the prompt does not = bye it returns the year response 
            heySonny = prompt(`NO, NOT SINCE ${randomYears[Math.floor(Math.random() * randomYears.length)]}`)
            //  byeCounter = 1;
        }
        
        else {
            byeCounter++
            if (byeCounter == 3) {
                break }
                heySonny = prompt("WHY DONT U LOVE ME")
        }
    }
}

// this grandma almost killed me :) 


// 3. Lord buckethead
// var users = {
//   theresa: {
//     party: "Conserative",
//     favoriteNumbers: [12, 42, 75]
//   },
//   Lord_Buckethead: {
//     party: "Gremloids",
//     favoriteNumbers: [8, 12, 24, 9]
//   },
//   mr_fishfinger: {
//     party: "Independent",
//     favoriteNumbers: [12, 14, 85, 99, 1001]
//   }
// }
// // How would you access theresa's party (i.e. the string "Conservative")?
// users.theresa.party

// // How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
// users.Lord_Buckethead.party

// // How would you change mr fishfinger's party to "birds eye"?
// users.mr_fishfinger.party = 'birds eye'

