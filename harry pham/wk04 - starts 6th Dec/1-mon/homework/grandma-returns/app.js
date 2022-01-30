function randomYear() {
    var randomNum = Math.floor(Math.random() * 21 )
    console.log(randomNum)
    return 1950 - randomNum
}
var goodByes = ["","",""]

console.log("first3", first3)
while(first3 != "BYEBYEBYE") {
    var promptWord = prompt("hello")
    console.log(promptWord)
    goodByes.push(promptWord)
    goodByes.shift()
    console.log("first3", first3)
    var first3 = goodByes[0] + goodByes[1] + goodByes[2]
    console.log(goodByes)
    if(promptWord !== promptWord.toUpperCase()) {
        alert("HUH?! SPEAK UP, SONNY")
    } else if (promptWord == promptWord.toUpperCase() && promptWord != "BYE"){
        alert("NO, NOT SINCE " + randomYear())
    }
}

