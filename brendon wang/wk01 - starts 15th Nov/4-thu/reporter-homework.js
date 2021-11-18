// even/odd reporter
var counter = 0;

while (counter <= 20) {
    if (counter % 2 == 0) {
        console.log (counter + " is even");
    } else {
        console.log (counter + " is odd");
    }
    counter++;
}



// 9 multiplication tables
var counter = 0;

while (counter <= 10){
    if (counter != 0) {
    console.log("1 * 9 = " + counter * 9);
    }
    counter++;
}



// top choices 
var counter = 0;

let myColors = ["blue", "green", "red", "yellow", "purple"];

while (counter < myColors.length) {
    console.log("My #" + (counter + 1) + " choice is " + myColors[counter]);
    counter++;
}

// top choices bonus, couldnt find suffix function 
var counter = 0;
let colorSuffix = ["st", "nd", "rd", "th", "th"];

while (counter < myColors.length) {
    console.log("My " + (counter + 1) + colorSuffix[counter] + " choice is " + myColors[counter])
    counter++;
}

// bonus bonus 

// function numberSuffix(num){
//     if 

// }