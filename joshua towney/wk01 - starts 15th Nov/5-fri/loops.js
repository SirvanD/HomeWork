// loops (5pt)
// QUESTION 1 
//using a while loop print the following in the console:
// 17
// 15
// 13
// 11
// 9
// 7
// 5
// 3
// 1

var counter = 17;

while (counter > 0) {
    console.log(counter);
    counter = counter - 2
}


// QUESTION 2 
//loop through the days array using a while loop to print the following in the console
// var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
// 0 Thursday
// 1 Friday
// 2 Saturday
// 3 Sunday

var days = ['Thrsday','Friday','Saturday','Sunday'];

var counter = 0;

while (counter < days.length) {
    console.log(counter + " " + days[counter]);
    counter = counter + 1
}