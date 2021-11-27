function talkToGrandma(){
    var toGrandma = prompt('Say something to grandma');
    while (toGrandma !== 'BYE') {
        if (toGrandma == null || toGrandma == ""){
        alert(`TRYING TO LEAVE WITHOUT SAYING BYE TO NANNA?`);
        toGrandma = prompt('Talk or say goodbye!');
        }else if (toGrandma == toGrandma.toUpperCase()) {
            alert(`NO, NOT SINCE 1938!`);
            toGrandma = prompt('Say something else to grandma, or say bye');
        }else{
            alert(`HUH?! SPEAK UP, SONNY!`);
            toGrandma = prompt('try shouting to grandma');
        }
    }
}