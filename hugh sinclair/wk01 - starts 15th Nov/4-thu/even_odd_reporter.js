// Write a while loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen

var counter = 0

function isEven(num) {
    return num % 2 == 0;
}

while (counter <= 20) {
    console.log(isEven(counter));
    counter++
}
