// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var bands =['Cog','Karnivool','Periphery','Chevelle','Sevendust'];
var counter = 0;

while (counter < 5) {
    if (bands.length === 5) {
        console.log("My favourite band is " + bands[4]);
    } else if (bands.length === 4) {
        console.log("My second favourite band is " + bands[3]);
    } else if (bands.length === 3) {
        console.log("My third favourite band is " + bands[2]);
    } else if (bands.length === 2) {
        console.log("My forth favoutite band is " + bands[1]);
    } else {
        console.log("My fifth favourite band is " + bands[0]);
    }   
        bands.pop();
        counter = counter + 1;
}


// SIMPLER SOLUTION

// var bands =['Cog','Karnivool','Periphery','Chevelle','Sevendust'];
// var index = 0;

// while (index < bands.length) {
//     console.log("My #" + (index + 1) +" fruit is " + bands[index])
//     index + index + 1
// }