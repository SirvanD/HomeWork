var fruits = ['banana', 'apple', 'apricot']

// fruits[Math.floor(Math.random()*fruits.length)];
var i = 1;
var random = fruits[Math.floor(Math.random()*fruits.length)];

console.log(`the fruit has ${random.length} letters starting with ${random.charAt(0)} and ends with ${random.charAt(random.length-1)}`)
var num1 = (prompt('enter a fruit'));

while (random !== num1) {
//    (prompt('enter a fruit'));

    if (random == fruits[0]) { 
        console.log(`the fruit has ${random.length} letters starting with ${random.charAt(0)} and ends with ${random.charAt(random.length-1)}`);
         num1 = (prompt('guess the fruit'))
        i++
    } else if (random == fruits[1]) {
        console.log(`the fruit has ${random.length} letters starting with ${random.charAt(0)} and ends with ${random.charAt(random.length-1)}`);
        num1 = (prompt('guess the fruit'))
        i++
    } else if (random == fruits[2]) {
        console.log(`the fruit has ${random.length} letters starting with ${random.charAt(0)} and ends with ${random.charAt(random.length-1)}`); 
        num1 = (prompt('guess the fruit'))
        i++
    } 

}

if (random == num1) {
    console.log(`Congrats, you got the answer in ${i} attempts`) 

}
// }


// generate random fruit 

