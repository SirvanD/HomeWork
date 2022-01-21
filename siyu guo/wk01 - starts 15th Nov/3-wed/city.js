// 2. Australian cities
// Create a program name city.js. allow the user to provide a city
// Depending on the answer, print an appropriate response of your choosing

let city = process.argv[2];
if (city == 'Sydney') {
    console.log("Sydney is really nice, and I'm here too.")
} else if (city == 'Melbourne') {
    console.log("I heard Melbourne is a nice city, but I've never been there before.")
} else if (city == "Perth") {
    console.log('I heard it is very hot in Perth in Summer.')
} else if (city == 'Brisbane') {
    console.log("There is Brisbane river in Brisbane, surprise!")
} else if (city == 'Adelaide') {
    console.log("The city center of Adelaide is well planned.")
} else {
    console.log("The info is limited here.")
}