var userGuess = prompt ('Enter a fruit!'); 
var fruits = ['apple', 'banana', 'pear', 'watermelon', 'orange','pineapple'];
var ansFruit = 'banana';
var firstL = ansFruit.charAt(0)
var lastL = ansFruit.charAt(ansFruit.length-1)
var index = 0

while(index < fruits.length && userGuess !== ansFruit){
    if(index < 1){
        var userGuess = prompt('It is ' + fruits[fruits.indexOf(ansFruit)].length + ' characters long. Starts with "' + firstL + '" and ends with "' + lastL + '". Guess the fruit.')
    } else {
        var userGuess = prompt('Wrong! Try again!')
    }
    index++
}

if (userGuess == ansFruit){
    alert('Congrats! You got it in ' + (index + 1) + ' attempts.');
}







