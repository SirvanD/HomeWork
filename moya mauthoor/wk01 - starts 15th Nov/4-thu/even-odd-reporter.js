
function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let counter = 0;

while (counter <= 20) {
    console.log(`${counter} is ${isOddOrEven(counter)}`);
    counter++;
}
