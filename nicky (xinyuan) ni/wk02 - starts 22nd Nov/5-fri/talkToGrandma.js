var userInput = prompt ("Anything you wanna share with grandma?");

function isUpperCase(userInput){
   return userInput === userInput.toUpperCase()
}

while(userInput !== "BYE" ){
  if(isUpperCase(userInput) && isNaN(userInput)){
    var userInput = prompt ("NO, NOT SINCE 1938!")
  } else {
    var userInput = prompt ("HUH?! SPEAK UP, SONNY!");
  }
}

alert("BYE, SONNY!")

