words = "what"
function vowelCount(word) {
    let i = 0
    let counter = 0
    while(i < word.length) {
        console.log(word[i])
        if(word[i] == "a") {
            counter = counter + 1
            console.log("a", counter)
        } else if (word[i] == "e") {
            counter = counter + 1
            console.log("e", counter)
        } else if (word[i] == "i") {
            counter = counter + 1
            console.log("i", counter)
        } else if (word[i] == "o") {
            counter = counter + 1
            console.log("o", counter)
        } else if (word[i] == "u") {
            counter = counter + 1
            console.log("u", counter)
        }
        i++;
    }
    return counter
}