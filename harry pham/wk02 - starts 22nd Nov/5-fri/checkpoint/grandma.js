while(promptWord != "BYE"){
    var promptWord = prompt()
    console.log(promptWord)
    if(promptWord !== promptWord.toUpperCase()) {
        alert("HUH?! SPEAK UP, SONNY")
    } else if(promptWord == "BYE") {
        alert("goodbye")
    } else {
        alert("NO, NOT SINCE 1938!")
    }
}

