
//1
function vowelCount(index){
    var arrayLetter=((index).toLowerCase()).split('');
    var index = 0;
    var counter = 0;
    while(index <= arrayLetter.length){
        if(arrayLetter[index]=='a' || arrayLetter[index]=='e' || arrayLetter[index]=='o' || arrayLetter[index]=='u' || arrayLetter[index]=='i'){
            counter++;
        }
        index++;
    } 
    return(counter);
}

//2
var userInput = prompt ("Anything you wanna share with grandma?");
var counter = 0;

while(counter < 3){
    var years = Math.floor(Math.random() * 21);
    if(userInput == 'BYE'){
        counter ++ 
        var userInput = prompt ("HUH?! SPEAK UP, SONNY! NOT SINCE " + (years+1930) + "!")
    } else {
        var counter = 0;
        var userInput = prompt ("HUH?! SPEAK UP, SONNY! NOT SINCE " + (years+1930) + "!")
    }
}

// alert("BYE, SONNY!");


// //3
// var users = {
//     theresa: {
//       party: "Conserative",
//       favoriteNumbers: [12, 42, 75]
//     },
//     Lord_Buckethead: {
//       party: "Gremloids",
//       favoriteNumbers: [8, 12, 24, 9]
//     },
//     mr_fishfinger: {
//       party: "Independent",
//       favoriteNumbers: [12, 14, 85, 99, 1001]
//     }
// }
// users["theresa"]["party"]
// users["Lord_Buckethead"]["party"]
// users["mr_fishfinger"]["party"]="birds eye";