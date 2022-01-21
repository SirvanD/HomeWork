let counter = 0;

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

isEven();
 
while (counter < 20) {
    if (isEven(counter)) {
        console.log(`${counter} is even.`)
    } else {
        console.log(`${counter} is odd.`)
    }
    counter++;
}