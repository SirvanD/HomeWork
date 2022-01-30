
// Remember that anytime you get input, it is a string, so you will need to change the age input to a number.

// If age is less than 18, print an appropriate message.

// If the age is equal to or over 18, print a different message.

var userAge = Number(process.argv[2]);

if (userAge => 18) {
    console.log(`You're good to go! glug glug!`);
}else if (userAge < 18) {
    console.log(`Grow up kiddo!`);
}else if (isNaN(userAge)) {
    console.log(`Enter your age!`);
}