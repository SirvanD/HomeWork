
//1
function vowelCount(words){
    var array =[words].split();
    console.log(array)
    var counter =0
    for(var index =0 ;index<array.length;index++){
        if( array[index]=="a" || array[index]=="o" || array[index]=="e" || array[index]=="i" || array[index]=="u" || array[index]=="a")
        counter++
    }
    return counter
}


//2
var userInput = prompt ("Anything you wanna share with grandma?");
var counter =1 

while(counter <3){
    var years = Math.floor(Math.random() * 21);
    if(userInput == 'BYE'){
        counter++ 
        var userInput = prompt ("HUH?! SPEAK UP, SONNY! NOT SINCE " + (years+1930) + "!")
    } else {
        var userInput = prompt ("HUH?! SPEAK UP, SONNY! NOT SINCE " + (years+1930) + "!")
    }
}

alert("BYE, SONNY!");



//3
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
users["theresa"]["party"]
users["Lord_Buckethead"]["party"]
users["mr_fishfinger"]["party"]="birds eye";