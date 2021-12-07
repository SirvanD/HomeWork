// What if grandma doesn't want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times, but not in a row, you should still be talking to grandma.

// var hiGrandma = prompt("HI SONNY");
var byeCounter = 0;

while (byeCounter < 3) {
    var hiGrandma = prompt("HI SONNY");
    if (hiGrandma == 'BYE') {
        byeCounter++;
        alert("That's nice dearie");
        hiGrandma = prompt("So tell me about your girlfriend");
        console.log(byeCounter);
    } else if (hiGrandma != 'BYE') {
            var years = [1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950];
            let randomYear = Math.floor(Math.random() * years.length)
            let pickedyear = years[randomYear];
            if (hiGrandma === hiGrandma.toUpperCase()) {
                    alert("NO, NOT SINCE " + pickedyear + "!");
                    hiGrandma = prompt('Anything else, dearie?');
                } else {
                    alert("HUH?! SPEAK UP SONNY");
                    hiGrandma = prompt('Anything else, dearie?');
            }
        }
}
alert("BYE BYE, SONNY");