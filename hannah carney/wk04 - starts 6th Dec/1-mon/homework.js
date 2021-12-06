
// function vowelCount(str) { 

//     // find the count of vowels
//     let vowels = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return vowels;
// }
 // this is the coolest function ever why aren't we using this all the time (however, when I remove .gi it just returns the same number, why is that? )

 
 
 function checkCase(message){
     var randomYears = [
         "1930!",
         "1978!",
         "YESTERDAY",
         "1955!",
         "1987!"
     ];
    
    var finalBye = 'BYE BYE';
    var counter = 0; 
    
    while(message != finalBye){
    var message = prompt('HI SONNY'); {
    } if(message == message.toLowerCase('')){
            message = prompt('HUH?! SPEAK UP, SONNY!'); 
    } if(message == message.toUpperCase('')){
            message = prompt(`NO, NOT SINCE ${randomYears[Math.floor(Math.random() * randomYears.length)]}`);
    } if (counter == 3){
           message = prompt(finalBye)
        }
    counter++;
    }
}

checkCase(); 





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
