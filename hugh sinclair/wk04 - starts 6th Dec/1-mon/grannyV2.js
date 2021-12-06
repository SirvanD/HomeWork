
byeCounter = 0

function talkToGrandma(){
    var toGrandma = prompt('Say something to grandma');
    while (true) {
        if (toGrandma == null || toGrandma == ""){
        alert(`TRYING TO LEAVE WITHOUT SAYING BYE TO NANNA?`);
        toGrandma = prompt('Talk or say goodbye!');
        }else if (toGrandma == 'BYE'){
            byeCounter++
            if(byeCounter == 3)
            break
        } else byeCounter = 0
        console.log(byeCounter)
        if (toGrandma == toGrandma.toUpperCase()) {
            alert(`NO, NOT SINCE ${Math.floor(Math.random() * 20) + 1930}!`);
            toGrandma = prompt('Say something else to grandma, or say bye');
        }else{
            alert(`HUH?! SPEAK UP, SONNY!`);
            toGrandma = prompt('try shouting to grandma');
        }
    }
}
//sorry Kasun, stuck with the break loop answer because I have to cook dinner and talk to the GF's parents tonight.