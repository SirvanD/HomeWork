// for (var n = 0; n <= 20; n++) {
//   if (n === 0) {
//     console.log(n + "is even");
//   } else if (n % 2 === 0) {
//     console.log(n + "is even");
//   } else {
//     console.log(n + "is odd");
//   }
// }

// Write a while loop that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen..

let n = 0;
while (n <= 20) {
  if (n === 0) {
    console.log(n + "is even");
  } else if (n % 2 === 0) {
    console.log(n + "is even");
  } else {
    console.log(n + "is odd");
  }
  n++;
}

// Write a while loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let n = 0;
while (n <= 10) {
  n *= 9;
  console.log(n);
  n++;
}

// Create an array to hold your top 5 choices (colors, presidents, whatever).

// Using a while loop, for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

// let topChoices = [color, hubby, sport, cities, flowers];
