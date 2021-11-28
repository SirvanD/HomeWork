function lovelyGrandma(userInput) {
    while (userInput !== "BYE") {
        let userInput = prompt("HELLO DEAR!");
        let desiredInput = userInput.toUpperCase();
        let counter = 0;
        if (userInput == desiredInput) {
            userInput = prompt("NO, NOT SINCE 1938!");
        } else if (userInput !== desiredInput) {
            userInput = prompt("HUH?! SPEAK UP, SONNY!");
        }
        counter++;
    }
    alert("BYE DEAR!")
}

lovelyGrandma();