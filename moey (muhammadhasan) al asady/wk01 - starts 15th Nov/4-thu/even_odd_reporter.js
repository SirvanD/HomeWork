// Write a while loop that will iterate from 0 to 20. 

// For each iteration, it will check if the current number is even or odd, and report that to the screen

var num1 = 0;


while (20 >= num1) {
    if (num1 % 2 ==0) {
        console.log(`${num1} is even`)
    } else {
        console.log(`${num1} is odd`)
    }
    num1++;
}


var num2 = 0;

while (num2 <= 10){
    var result = num2 * 9;
    console.log(`${num2} * ${9} = ${result}`)
    num2++;
}


var favChoices = ['Arsenal', 'Football', 'MotoGP', 'Blue', 'Black']

for (let i = 0; i < favChoices.length; i++){
    console.log(`My #${i + Number(1)} choice is ${favChoices[i]}`)
}

 