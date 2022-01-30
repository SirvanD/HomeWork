var startPrompt = prompt(`say something to grandma`)


while (startPrompt != `BYE`) {
    //startPrompt
    if (startPrompt == startPrompt.toUpperCase()) {
        startPrompt = prompt(`NO, NOT SINCE 1938!`)
     } else  {
        startPrompt = prompt(`HUH?! SPEAK UP, SONNY!`)
    }

}